import { PageEvent } from '@angular/material/paginator';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { Heroe } from '../model/Heroe';
import { ApiService } from '../services/api.service';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaHeroesComponent } from './lista-heroes.component';


describe('ListaHeroesComponent', () => {
  let component: ListaHeroesComponent;
  let fixture: MockedComponentFixture<ListaHeroesComponent>;
  let confirmSpy: jest.SpyInstance;

  beforeEach(() => MockBuilder(ListaHeroesComponent, AppModule)
  .provide({ provide: ApiService, useValue: mockApiService}));

  beforeEach(() => {
    fixture = MockRender(ListaHeroesComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
    confirmSpy = jest.spyOn(window, 'confirm');
  });

  afterEach(() => jest.clearAllMocks())

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('métodos', () => {
    describe('cargarPagina', () => {
      const pageEvent = {pageIndex: 5, pageSize: 40} as PageEvent;
      it('si no se está filtrando por héroe se llama a obtenerHeroes', () => {
        component.cargarPagina(pageEvent);
        expect(mockApiService.obtenerHeroes).toHaveBeenCalled();
      })

      it('si se está filtrando por héroe se llama a obtenerHeroesPorNombre con la cadena del filtro', () => {
        component.nombreFiltro = 'cap';
        component.cargarPagina(pageEvent);
        expect(mockApiService.obtenerHeroesPorNombre).toHaveBeenCalledWith('cap');
      })
    })
    describe('eliminarHeroe', () => {
      it('si se confirma el borrado se llama a borrarHeroe', () => {
        confirmSpy.mockImplementation(jest.fn(() => true));
        component.eliminarHeroe(heroes[0]);
        expect(mockApiService.borrarHeroe).toHaveBeenCalledWith(heroes[0].id);
      })
      it('si se declina el borrado no se llama a borrarHeroe', () => {
        confirmSpy.mockImplementation(jest.fn(() => false));
        component.eliminarHeroe(heroes[0]);
        expect(mockApiService.borrarHeroe).not.toHaveBeenCalled();
      })
    })
  })

describe('template', () => {
    test('contiene el titulo, el filtro, el botón de añadir y el paginador', () => {
      expect(fixture.nativeElement.querySelector("[data-test='titulo']")).not.toBeNull();
      expect(fixture.nativeElement.querySelector("[data-test='filtro']")).not.toBeNull();
      expect(fixture.nativeElement.querySelector("[data-test='boton-añadir']")).not.toBeNull();
      expect(fixture.nativeElement.querySelector("[data-test='paginador']")).not.toBeNull();
    });

    test('se debe de renderizar el componente app-heroe y coincidir con el número de héroes renderizados', () => {
      component.heroes$.next(heroes);
      fixture.detectChanges();
      const selectorHeroes = fixture.nativeElement.querySelectorAll("[data-test='heroe']");
      expect(ngMocks.findInstance(HeroeComponent)).not.toBeNull();
      expect(selectorHeroes.length).toBe(heroes.length);
    })
  })
});

const heroes: Heroe[] = [
  {
    id: 1,
    nombre: 'Capitán América',
    superPoder:
      'Fuerza, agilidad, resistencia, capacidad de curación, estratega experto, artista marcial, escudo indestructible.',
  },
  {
    id: 2,
    nombre: 'Pantera Negra',
    superPoder:
      'Sentidos mejorados, condición sobrehumana, velocidad, artista marcial, resistencia mágica, atuendo asistido por vibranium.',
  },
  {
    id: 3,
    nombre: 'Killmonger',
    superPoder:
      'Fuerza, estratega experto y manipulador, cazador de nivel máximo, intelecto de nivel de genio.',
  },
];

const mockApiService = {
  obtenerHeroes: jest.fn(() => of(heroes)),
  obtenerHeroesPorNombre: jest.fn(() => of(null)),
  borrarHeroe: jest.fn(() => of(null)),
}