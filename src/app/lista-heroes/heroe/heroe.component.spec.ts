import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppModule } from '../../app.module';
import { HeroeComponent } from './heroe.component';
import { Heroe } from '../../model/Heroe';
import { EventEmitter } from '@angular/core';

describe('HeroeComponent', () => {
  let component: HeroeComponent;
  let fixture: MockedComponentFixture<HeroeComponent>;

  beforeEach(() =>
    MockBuilder(HeroeComponent, AppModule)
  );

  beforeEach(() => {
    fixture = MockRender(HeroeComponent, {
      heroe: {
        nombre: 'Pepito',
        superPoder: 'De los palotes'
      } as Heroe,
      eliminarHeroe: new EventEmitter()
    });
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
