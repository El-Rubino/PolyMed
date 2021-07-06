import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderBarComponent } from "./header/header-bar/header-bar.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";

const routes: Routes = [
  { path: 'navBar', component:HeaderBarComponent},
  { path: 'header_main', component:HeaderComponent},
  { path: 'body', component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
