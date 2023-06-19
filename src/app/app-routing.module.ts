import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
// {
//   path:'',
//   component:HomeComponent,
// },
{
  path:'update',
  component:UpdateComponent,
},

{
  path:'',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'home',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
