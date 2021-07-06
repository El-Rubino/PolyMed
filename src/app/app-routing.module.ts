import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from "./body/body.component";
import { HeaderBarComponent } from "./header/header-bar/header-bar.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: 'navBar', component:HeaderBarComponent},
  { path: 'header_main', component:HeaderComponent},
  { path: 'body', component:BodyComponent},
  { path: 'login', component:LoginComponent},
  { path: 'signUp', component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
