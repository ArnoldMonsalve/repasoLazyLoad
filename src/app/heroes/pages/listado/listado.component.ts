import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interface/heroes';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private _heroes: HeroesService) { }
  heroes:Heroes[]=[];

  ngOnInit(): void {
    this.traerHeroes();
  }

  traerHeroes(){
    this._heroes.getHeroes().subscribe(
      {
        next: data => {
          this.heroes = data;
          console.log(this.heroes);

        },
        error: (error) => {
          console.log(error.error);
        }
      });
  }
}
