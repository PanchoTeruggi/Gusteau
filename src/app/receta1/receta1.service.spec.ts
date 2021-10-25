import { TestBed } from '@angular/core/testing';

import { Receta1Service } from './receta1.service';

describe('Receta1Service', () => {
  let service: Receta1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Receta1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
