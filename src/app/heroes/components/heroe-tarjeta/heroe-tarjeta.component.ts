
import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interface/heroes';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit{

  @Input() heroe!:Heroes;//heroe! tambien podra servir

  constructor() { }

  ngOnInit(): void {

  }

}
