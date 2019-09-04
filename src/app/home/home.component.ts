import { Component, OnInit } from "@angular/core";
import { ArticlesService, Article } from "../articles.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  articles: Article[];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
