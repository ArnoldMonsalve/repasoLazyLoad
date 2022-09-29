import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interface/heroes';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroes): string {
    //el id del heroes es tambien el name de las imagenes de assets
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
