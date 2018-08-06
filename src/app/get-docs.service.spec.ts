import { TestBed, inject } from '@angular/core/testing';

import { GetDocsService } from './get-docs.service';

describe('GetDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDocsService]
    });
  });

  it('should be created', inject([GetDocsService], (service: GetDocsService) => {
    expect(service).toBeTruthy();
  }));
});
