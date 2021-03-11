import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadenaEnMayusculasDirective } from './directivas/cadena-en-mayusculas.directive';
import { FormHeroeComponent } from './form-heroe/form-heroe.component';
import { HeroeComponent } from './lista-heroes/heroe/heroe.component';
import { ListaHeroesComponent } from './lista-heroes/lista-heroes.component';
import { DatosEnMemoriaService } from './services/datos-en-memoria.service';
import { Interceptor } from './util/interceptor';

@NgModule({
  declarations: [AppComponent, ListaHeroesComponent, FormHeroeComponent, CadenaEnMayusculasDirective, HeroeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DatosEnMemoriaService, {
      dataEncapsulation: false,
    }),
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
