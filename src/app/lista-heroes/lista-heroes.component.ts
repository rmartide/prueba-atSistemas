import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  tap
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
  heroesPaginados$: Observable<Heroe[]>;
  cargando = false;
  limite = 5;
  pagina = 0;
  total = 100;
  nombreFiltro = '';

  constructor(private apiService: ApiService) {
    this.heroesPaginados$ = this.heroes$.pipe(
      tap((heroes: Heroe[]) => {
        if (this.paginaFueraDeRango(heroes.length)) {
          this.pagina = 0;
        }
        this.total = heroes.length;
      }),
      map((heroes: Heroe[]) =>
        heroes.slice(this.limite * this.pagina, this.limite * (this.pagina + 1))
      )
    );
  }

  ngOnInit(): void {
    this.filterInput.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(250),
        tap((nombre: string) => (this.nombreFiltro = nombre))
      )
      .subscribe(this.cargarHeroesPorNombre.bind(this));
    this.cargarHeroes();
  }
  
  cargarPagina({ pageIndex, pageSize }: PageEvent) {
    this.pagina = pageIndex;
    this.limite = pageSize;
    this.nombreFiltro.length === 0
    ? this.cargarHeroes()
    : this.cargarHeroesPorNombre(this.nombreFiltro);
  }
  
  eliminarHeroe(heroe: Heroe) {
    const borrar = confirm(`¿Estás seguro de eliminar a ${heroe.nombre}?`);
    if (borrar) {
      this.apiService.borrarHeroe(heroe.id).subscribe(() => {
        this.cargarPagina({ pageIndex: this.pagina, pageSize: this.limite} as PageEvent);
      });
    }
  }
  
  private cargarHeroes() {
    this.apiService
    .obtenerHeroes()
    .subscribe((heroes: Heroe[]) => this.heroes$.next(heroes));
  }

  private cargarHeroesPorNombre(nombre: string) {
    this.apiService
    .obtenerHeroesPorNombre(nombre)
    .subscribe((heroes: Heroe[]) => this.heroes$.next(heroes));
  }

  private paginaFueraDeRango(cantidadHeroes: number): boolean {
    const cantidadParaPagina = this.limite * (this.pagina + 1);
    return cantidadParaPagina - cantidadHeroes > this.limite;
  }
}
