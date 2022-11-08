import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate,CanLoad {//

  constructor(private _auth:AuthService, private router:Router){}//se puede crear un constructor para inyectar servicios

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> |Promise<boolean | UrlTree> | boolean | UrlTree {
      //   if(this._auth.auth.id){//SI EXISTE EL ID DEL USUARIO ENTRA SI NO LO SACA EL GUARDIAN
      //     return true
      //   }
      // return false;
      return this._auth.verificaAutenticacion().pipe(tap(
        autenticado => {
          if(autenticado){

          }else{
            this.router.navigate(['./auth/login'])
          }
        }
      ))
    }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._auth.verificaAutenticacion();






    // if(this._auth.auth.id){//SI EXISTE EL ID DEL USUARIO ENTRA SI NO LO SACA EL GUARDIAN
    //   return true
    // }
    // console.log('repasando guards',true);
    // console.log(route);
    // console.log(segments);

    return false;
  }
}
