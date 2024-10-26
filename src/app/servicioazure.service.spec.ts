import { TestBed } from '@angular/core/testing';

import { ServicioazureService } from './servicioazure.service';

describe('ServicioazureService', () => {
  let service: ServicioazureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioazureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
