import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './pipes/filmes/filmes.component';
import { ContadorComponent } from './components/contador/contator.component';

const routes: Routes = [
  { path: '', component: FilmesComponent },
  { path: 'contador', component: ContadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
