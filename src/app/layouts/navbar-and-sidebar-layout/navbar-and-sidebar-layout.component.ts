import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-and-sidebar-layout',
  template: `
    <app-navbar></app-navbar>
    
    <div class="row">
    <div class="col-lg-2 sidebar">
    <app-sidebar></app-sidebar>
    </div>
    <div class="col-lg-10 min-height">
    <router-outlet></router-outlet>
    </div>
    </div>
  `,
  styles: [
    `.row{
      margin:0;
      height:100%;
    }
    .min-height{
      min-height:650px;
    }
    .sidebar {
      background-color: #212529;
  }
    `
  ]
})
export class NavbarAndSidebarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
