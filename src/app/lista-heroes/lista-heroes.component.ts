import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Heroe } from '../model/Heroe';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.scss'],
})
export class ListaHeroesComponent implements OnInit {
  filterInput = new FormControl();
  heroes$: Observable<Heroe[]>;

  constructor(private apiService: ApiService) {
    this.heroes$ = this.apiService.obtenerHeroes();
  }

  ngOnInit(): void {
    this.filterInput.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(250)
    );
  }

  cargarPagina({ pageIndex, pageSize }: PageEvent) {}
}
