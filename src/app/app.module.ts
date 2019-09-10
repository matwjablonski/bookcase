import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { CustomMaterialModuleModule } from "./custom-material-module/custom-material-module.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LogoComponent } from "./shared/logo/logo.component";
import { MyBookshelfComponent } from "./my-bookshelf/my-bookshelf.component";
import { HomeComponent } from "./home/home.component";
import { BookComponent } from "./book/book.component";
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MyBookshelfComponent,
    HomeComponent,
    BookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
