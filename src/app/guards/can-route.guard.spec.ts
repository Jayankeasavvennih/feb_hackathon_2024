import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canRouteGuard } from './can-route.guard';

describe('canRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
