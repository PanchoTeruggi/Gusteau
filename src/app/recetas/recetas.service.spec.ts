import { TestBed } from '@angular/core/testing';

import { recetasService } from './recetas.service';

describe('recetasService', () => {
  let service: recetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(recetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
