import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form-heroe',
  templateUrl: './form-heroe.component.html',
  styleUrls: ['./form-heroe.component.scss'],
})
export class FormHeroeComponent implements OnInit {
  heroeForm = this.fb.group({
    nombre: ['', Validators.required],
    superPoder: ['', Validators.required],
  });

  get nombre() {
    return this.heroeForm.get('nombre');
  }

  get superPoder() {
    return this.heroeForm.get('superPoder');
  }

  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.id && this.esNumero(this.id)) {
      this.apiService.obtenerHeroe(+this.id).subscribe((heroe) => {
        this.heroeForm.patchValue(heroe);
      });
    }
  }

  onSubmit() {
    if (!this.heroeForm.invalid) {
      let llamada;
      if (this.id && this.esNumero(this.id)) {
        llamada = this.apiService.modificarHeroe({
          ...this.heroeForm.value,
          id: +this.id,
        });
      } else {
        llamada = this.apiService.añadirHeroe(this.heroeForm.value);
      }
      llamada.subscribe(() => this.router.navigateByUrl('/heroes'))
    }
  }

  private esNumero(numero: string | null): boolean {
    return !Number.isNaN(Number(numero));
  }
}
