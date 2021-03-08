import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHeroesComponent } from './lista-heroes/lista-heroes.component';
import { FormHeroeComponent } from './form-heroe/form-heroe.component';

const routes: Routes = [
  { path: 'heroes', component: ListaHeroesComponent },
  { path: 'heroes/:id', component: FormHeroeComponent },
  { path: 'heroes/nuevo', component: FormHeroeComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
