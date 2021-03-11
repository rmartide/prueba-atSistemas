import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(() =>
    MockBuilder(AppComponent, AppModule)
  );

  beforeEach(() => {
    fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
