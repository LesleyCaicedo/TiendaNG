import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'prueba', component: PruebaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'prueba', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
