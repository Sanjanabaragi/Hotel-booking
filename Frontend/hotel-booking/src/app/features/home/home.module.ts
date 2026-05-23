import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from '../home-page/home-page';
import { LandingPageComponent } from '../landing-page/landing-page';

@NgModule({
  declarations: [
    HomePageComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }