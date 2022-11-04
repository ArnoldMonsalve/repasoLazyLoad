import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interface/heroes';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // getHerores():Observable<Heroes[]>{
  //   return this.http.get<Heroes[]>('http://localhost:3000/heroes')
  // }

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroePorId( id: string ):Observable<Heroes> {
    return this.http.get<Heroes>(`${ this.baseUrl }/heroes/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }

  agregarHeroes(heroe:Heroes): Observable<Heroes> {
    return this.http.post<Heroes>(`${ this.baseUrl }/heroes`,heroe);
  }

  ActualizarHeroes(heroe:Heroes): Observable<Heroes> {
    return this.http.put<Heroes>(`${ this.baseUrl }/heroes/${heroe.id}`,heroe);
  }

  BorrarHeroes(id:string): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${id}`);
  }
}
