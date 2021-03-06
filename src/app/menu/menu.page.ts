import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  activePath = '';
  pages = [
  {
  name: 'Login',
  path: '/menu/login'
  },
  {
  name: 'Register',
  path: '/menu/register'
  },
  {
  name: 'Home',
  path: '/menu/home'
  },
  {
  name: 'Logistics',
  path: '/menu/songlist'
  },
  {
  name: 'Service',
  path: '/menu/service'
  },
  {
  name: 'Worksites',
  path: '/menu/worksites'
  }
  ];
  constructor(private router: Router) {
  this.router.events.subscribe((event: RouterEvent) => {
  this.activePath = event.url;
  });

}
  ngOnInit() {
  }
 }
