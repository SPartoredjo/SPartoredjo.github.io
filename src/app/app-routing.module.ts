import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ConfirmationComponent } from './views/confirmation/confirmation.component';
import { FormTwoComponent } from './views/form-two/form-two.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'form-two', component: FormTwoComponent },

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 