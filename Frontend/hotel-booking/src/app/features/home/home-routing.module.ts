import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page';
import { HomePageComponent } from '../home-page/home-page';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Public fallback landing page
  { path: 'dashboard', component: HomePageComponent } // Authenticated explorer feed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }