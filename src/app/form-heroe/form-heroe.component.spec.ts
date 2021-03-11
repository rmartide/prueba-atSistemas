import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppModule } from '../app.module';
import { FormHeroeComponent } from './form-heroe.component';

describe('FormHeroeComponent', () => {
  let component: FormHeroeComponent;
  let fixture: MockedComponentFixture<FormHeroeComponent>;

  beforeEach(() =>
    MockBuilder(FormHeroeComponent, AppModule)
    .keep(FormBuilder)
    .keep(Router)
    .keep(ActivatedRoute)
  );

  beforeEach(() => {
    fixture = MockRender(FormHeroeComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
