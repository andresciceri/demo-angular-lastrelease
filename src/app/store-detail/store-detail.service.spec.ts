/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreDetailService } from './store-detail.service';

describe('Service: StoreDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreDetailService]
    });
  });

  it('should ...', inject([StoreDetailService], (service: StoreDetailService) => {
    expect(service).toBeTruthy();
  }));
});
