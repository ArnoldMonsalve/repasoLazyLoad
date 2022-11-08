import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { map,tap, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string=environment.baseUrl;
  private _auth:Auth | undefined;

  get auth(){
    return {...this._auth}//como estara privado se hara una funcion get y se destructura para que no se modifique
  }

  constructor(private http : HttpClient) { }

  verificaAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('token')){
        return of(false);//
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(map(data =>{
      this._auth=data;
      return true;
    }));

    //return of(true);   of para darle un valor del tipado dado en el observable y asi deja de llorar pero con el pipe boolean no hay necesidad del of lo dejare para no olvidarlo
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(tap(
      data=>this._auth=data
    ),
    tap(data => localStorage.setItem('token',data.id)))//capturando en el local storage el id del usuario logueado
  }

  logout(){
    this._auth=undefined;
  }
}
