import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cargando$: Observable<boolean>;
  constructor(private loadingService: LoadingService) {
    this.cargando$ = loadingService.cargando$
    .pipe(delay(0));
  }
}
