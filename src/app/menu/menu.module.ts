import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
  path: 'menu',
  component: MenuPage,
  children: [
  {
  path: 'home',
  loadChildren: '../home/home.module#HomePageModule'
  },
  {
  path: 'login',
  loadChildren: '../login/login.module#LoginPageModule'
  },
  {
  path: 'register',
  loadChildren: '../register/register.module#RegisterPageModule'
  },
  {
  path: 'songlist',
  loadChildren: '../songlist/songlist.module#SonglistPageModule'
  }
  ]
  },
  {
  path: '',
  redirectTo: '/menu/home'
  }
 ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    /*MenuPageRoutingModule*/
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
