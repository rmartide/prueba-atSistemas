import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppModule } from '../app.module';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;
  let fixture: MockedComponentFixture<LoadingService>;

  beforeEach(() =>
    MockBuilder(LoadingService, AppModule)
  );

  beforeEach(() => {
    fixture = MockRender(LoadingService);
    service = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
