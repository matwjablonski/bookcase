import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BOOKS } from "../mock/books";

export interface Book {
  id: string;
}

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
}
