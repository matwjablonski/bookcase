import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../books.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  ngOnInit() {
    console.log("this.book", this.book);
  }
}
