import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { InternshipComponent } from './internship/internship.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarModule } from '../navbar/navbar.module';
import { RealisationTileComponent } from './realisation-tile/realisation-tile.component';



@NgModule({
  declarations: [
    HomeComponent,
    WhoAmIComponent,
    InternshipComponent,
    RealisationsComponent,
    RealisationTileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NavbarModule,
  ],
  exports: [
    HomeComponent,
    WhoAmIComponent,
    InternshipComponent,
    RealisationsComponent
  ]
})
export class ContentModule { }
