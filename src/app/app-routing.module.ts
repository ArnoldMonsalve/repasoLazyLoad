import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPaginaComponent } from './shared/error-pagina/error-pagina.component';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(e=>e.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () =>import('./heroes/heroes.module').then(e=>e.HeroesModule)
  },
  {
    path:'404',
    component: ErrorPaginaComponent
  },
  {
    path:'**',
    // component:ErrorPaginaComponent
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
