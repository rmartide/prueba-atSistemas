import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppModule } from '../app.module';
import { DatosEnMemoriaService } from './datos-en-memoria.service';

describe('DatosEnMemoriaService', () => {
  let service: DatosEnMemoriaService;
  let fixture: MockedComponentFixture<DatosEnMemoriaService>;

  beforeEach(() =>
    MockBuilder(DatosEnMemoriaService, AppModule)
  );

  beforeEach(() => {
    fixture = MockRender(DatosEnMemoriaService);
    service = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
