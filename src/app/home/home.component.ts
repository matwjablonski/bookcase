import { Component, OnInit } from "@angular/core";
import { ArticlesService, Article } from "../articles.service";
import { BooksService, Book } from "../books.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  articles: Article[];
  books: Book[];

  constructor(
    private articlesService: ArticlesService,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.getArticles();
    this.getBooks();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(books => (this.books = books));
  }
}
