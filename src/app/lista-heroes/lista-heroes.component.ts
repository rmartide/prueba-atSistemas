import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Observable, pipe, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { Heroe } from '../model/Heroe';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.scss'],
})
export class ListaHeroesComponent implements OnInit {
  filterInput = new FormControl();
  heroes$ = new Subject<Heroe[]>();
  cargando = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.filterInput.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(250),
        mergeMap((nombre) => this.apiService.obtenerHeroesPorNombre(nombre))
      )
      .subscribe((heroes) => this.heroes$.next(heroes));
    this.cargarHeroes();
  }

  cargarHeroes() {
    this.apiService
      .obtenerHeroes()
      .subscribe((heroes) => this.heroes$.next(heroes));
  }

  cargarPagina({ pageIndex, pageSize }: PageEvent) {}
  eliminarHeroe(id: number, nombre: string) {
    const borrar = confirm(`¿Estás seguro de eliminar a ${nombre}?`);
    if (borrar) {
      this.apiService.borrarHeroe(id).subscribe(() => {
        this.cargarHeroes();
      });
    }
  }
}
