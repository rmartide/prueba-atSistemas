import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHeroesComponent } from './lista-heroes/lista-heroes.component';

const routes: Routes = [
  { path: 'home', component: ListaHeroesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
