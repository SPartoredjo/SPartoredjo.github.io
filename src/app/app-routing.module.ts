import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ConfirmationComponent } from './views/confirmation/confirmation.component';
import { FormTwoComponent } from './views/form-two/form-two.component';
import { FormThreeComponent } from './views/form-three/form-three.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'form-two', component: FormTwoComponent },
  { path: 'form-three', component: FormThreeComponent },

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 