import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyBookshelfComponent } from "../app/my-bookshelf/my-bookshelf.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "my-bookshelf", component: MyBookshelfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
