import { TestBed } from '@angular/core/testing';

import { UsuarioExisteService } from './usuario-existe.service';

describe('UsuarioExisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioExisteService = TestBed.get(UsuarioExisteService);
    expect(service).toBeTruthy();
  });
});
