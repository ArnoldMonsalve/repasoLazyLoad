import { ConfirmarComponent } from './../../components/confirmar/confirmar.component';
import { Component, OnInit } from '@angular/core';
import { Publisher, Heroes } from '../../interface/heroes';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  Publisher=[
  {
    id: 'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id: 'MarvelComics',
    desc: 'Marvel Comics'
  }
  ]

heroe:Heroes={
  superhero: '',
  alter_ego:  '',
  characters:  '',
  first_appearance:  '',
  publisher: Publisher.DCComics,
  alt_img:''
}

  constructor(private heroes__:HeroesService, private idUrl: ActivatedRoute, private router:Router, private snack:MatSnackBar, private dialogMaterial:MatDialog) { }

  ngOnInit(): void {

    if(this.router.url.includes('editar')){
      this.idUrl.params.pipe(
        switchMap(({id}) => this.heroes__.getHeroePorId(id))
      ).subscribe( data => this.heroe=data);
    }

  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){

      return;
    }
    //console.log(this.heroe.id);

    if(this.heroe.id){
      this.heroes__.ActualizarHeroes(this.heroe).subscribe(
        data => console.log(data));
        this.mostrarSnack('Registro Actualizado')
        this.router.navigate(['/heroes'])
    }else{
    this.heroes__.agregarHeroes(this.heroe).subscribe(
      data=>{
            this.mostrarSnack('Registro Creado')
            this.router.navigate(['/heroes',data.id])//'/heroes/editar'
      });
    }

  }

  borrarHeroe(){

    const dialog = this.dialogMaterial.open(ConfirmarComponent,{
        width:'350px',
        data: this.heroe
      })

      dialog.afterClosed().subscribe((result)=>{
        if (result){
          this.heroes__.BorrarHeroes(this.heroe.id!).subscribe(
            data => {
          this.router.navigate(['/heroes'])
          }
          )
        }
      })

  }

  mostrarSnack( mensaje:string){

    this.snack.open( mensaje, 'Ok!', {
      duration:2500
    });

  }
}
