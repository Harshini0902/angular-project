import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-only-layout',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class NavbarOnlyLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
