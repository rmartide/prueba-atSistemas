import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

import { ListaHeroesComponent } from './lista-heroes.component';
import { AppModule } from '../app.module';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';

describe('ListaHeroesComponent', () => {
  let component: ListaHeroesComponent;
  let fixture: MockedComponentFixture<ListaHeroesComponent>;

  beforeEach(() => MockBuilder(ListaHeroesComponent, AppModule)
  .provide({ provide: ApiService, useValue: mockApiService}));

  beforeEach(() => {
    fixture = MockRender(ListaHeroesComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
const mockApiService = {
  obtenerHeroes: jest.fn(() => of(null))
}