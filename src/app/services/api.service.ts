import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../model/Heroe';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'api/heroes';

  constructor(private http: HttpClient) {}

  obtenerHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.apiUrl);
  }

  obtenerHeroesPorNombre(nombre: string): Observable<Heroe[]> {
    return this.http
      .get<Heroe[]>(`${this.apiUrl}/?nombre=${nombre}`)
  }

  obtenerHeroe(id: number): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.apiUrl}/${id}`);
  }

  borrarHeroe(id: number) {
    return this.http.delete<Heroe>(`${this.apiUrl}/${id}`);
  }

  añadirHeroe(heroe: string): Observable<Heroe>  {
    return this.http.post<Heroe>(this.apiUrl, heroe);
  }

  modificarHeroe(heroe: Heroe)  {
    return this.http.put(this.apiUrl, heroe);
  }
}
