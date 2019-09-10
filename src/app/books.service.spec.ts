import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
