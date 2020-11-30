import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "hello", component: Hello },
  {path: "goodbye", component: Goodbye},
  {path: "", redirectTo: "/hello", path "full" }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
