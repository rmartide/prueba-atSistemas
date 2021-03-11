import { HttpClient } from '@angular/common/http';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { ApiService } from './api.service';
import { Heroe } from '../model/Heroe';

describe('ApiService', () => {
  let service: ApiService;
  let fixture: MockedComponentFixture<ApiService>;
  const apiUrl = 'api/heroes';

  beforeEach(() =>
    MockBuilder(ApiService, AppModule).
    provide({ provide: HttpClient, useValue: mockHttpClient})
  );

  beforeEach(() => {
    fixture = MockRender(ApiService);
    service = fixture.point.componentInstance;
  });

  afterEach(() => jest.clearAllMocks())

  it('should create', () => {
    expect(service).toBeDefined();
  });

  describe('metodos', () => {
    describe('obtenerHeroes', () => {
      it('debe llamar al método get únicamente con la url del api', (done) => {
        service.obtenerHeroes().subscribe(() => {
          expect(mockHttpClient.get).toHaveBeenCalledWith(apiUrl)
          done();
        });
      });
    });
    describe('obtenerHeroesPorNombre', () => {
      it('debe llamar al método get con la url más el nombre como parámetro get', (done) => {
        const nombre = 'nombre';
        service.obtenerHeroesPorNombre(nombre).subscribe(() => {
          expect(mockHttpClient.get).toHaveBeenCalledWith(`${apiUrl}/?nombre=${nombre}`)
          done();
        });
      });
    });
    describe('obtenerHeroe', () => {
      it('debe llamar al método get con la url / id', (done) => {
        const id = 1;
        service.obtenerHeroe(id).subscribe(() => {
          expect(mockHttpClient.get).toHaveBeenCalledWith(`${apiUrl}/${id}`)
          done();
        });
      });
    });
    describe('borrarHeroe', () => {
      it('debe llamar al método delete con la url / id', (done) => {
        const id = 1;
        service.borrarHeroe(id).subscribe(() => {
          expect(mockHttpClient.delete).toHaveBeenCalledWith(`${apiUrl}/${id}`)
          done();
        });
      });
    });
    describe('añadirHeroe', () => {
      it('debe llamar al método post con 2 parámetros: la url y el héroe', (done) => {
        const heroe: Heroe = {
          id: 1,
          nombre: 'nombre',
          superPoder: 'super poder'
        }
        service.añadirHeroe(heroe).subscribe(() => {
          expect(mockHttpClient.post).toHaveBeenCalledWith(apiUrl, heroe)
          done();
        });
      });
    });
    describe('modificarHeroe', () => {
      it('debe llamar al método put con 2 parámetros: la url y el héroe', (done) => {
        const heroe: Heroe = {
          id: 1,
          nombre: 'nombre',
          superPoder: 'super poder'
        }
        service.modificarHeroe(heroe).subscribe(() => {
          expect(mockHttpClient.put).toHaveBeenCalledWith(apiUrl, heroe)
          done();
        });
      });
    });
  });
});
const mockHttpClient = {
  get: jest.fn(() => of(null)),
  post: jest.fn(() => of(null)),
  put: jest.fn(() => of(null)),
  delete: jest.fn(() => of(null)),
}