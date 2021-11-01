import { TestBed } from '@angular/core/testing';

import { DatosapiService } from './datosapi.service';

describe('DatosapiService', () => {
  let service: DatosapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
