import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const appRoutes: Routes = [
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'details',
    component: DetailsPageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomePageComponent,
    DetailsPageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
