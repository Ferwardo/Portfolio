import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { InternshipComponent } from './content/internship/internship.component';
import { RealisationsComponent } from './content/realisations/realisations.component';
import { WhoAmIComponent } from './content/who-am-i/who-am-i.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "whoami", component: WhoAmIComponent },
  { path: "internship", component: InternshipComponent },
  { path: "realisations", component: RealisationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
