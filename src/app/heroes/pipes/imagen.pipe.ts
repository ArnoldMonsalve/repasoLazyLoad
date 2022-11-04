import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interface/heroes';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroes): string {
    //el id del heroes es tambien el name de las imagenes de assets
    if( !heroe.id || heroe.alt_img == ""){//retornar imagen vacia para los que no tienen img
      return 'assets/no-image.png';
    }else if(heroe.alt_img){//retornar url
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;//retornar una img de assets
    }
  }

}
