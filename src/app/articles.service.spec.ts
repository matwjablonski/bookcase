import { TestBed } from "@angular/core/testing";

import { ArticlesService } from "./articles.service";

describe("ArticlesService", () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ArticlesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
