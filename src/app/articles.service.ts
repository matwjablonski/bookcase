import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { articles } from "../mock/articles";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(articles);
  }
}
