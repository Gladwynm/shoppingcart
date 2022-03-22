import { TestBed } from '@angular/core/testing';

import { RouthGuard } from './routh.guard';

describe('RouthGuard', () => {
  let guard: RouthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
