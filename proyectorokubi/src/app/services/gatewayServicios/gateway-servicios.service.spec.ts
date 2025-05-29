import { TestBed } from '@angular/core/testing';

import { GatewayServiciosService } from './gateway-servicios.service';

describe('GatewayServiciosService', () => {
  let service: GatewayServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
