import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LoadingService } from './services/loading.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(() =>
    MockBuilder(AppComponent, AppModule)
    .keep(LoadingService)
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
