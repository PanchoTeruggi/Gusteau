import { TestBed } from '@angular/core/testing';

import { Receta2Service } from './receta2.service';

describe('Receta2Service', () => {
  let service: Receta2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Receta2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
