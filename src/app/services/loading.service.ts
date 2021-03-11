import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  cargando$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setCargando(cargando: boolean) {
    this.cargando$.next(cargando);
  }

}
