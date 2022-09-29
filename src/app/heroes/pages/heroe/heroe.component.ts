import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interface/heroes';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroes;
  paramid:any;

  constructor(private idurl: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {


    this.paramid = this.idurl.snapshot.params;
    console.log(this.paramid);

    this.idurl.params.pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorId(id) )
      )
      .subscribe(
        heroe => this.heroe = heroe
        );


  }


  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
