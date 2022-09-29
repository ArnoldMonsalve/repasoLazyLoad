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
}
