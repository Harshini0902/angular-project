import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
public href : String='';
  constructor(private router:Router) { }
hasNavbarLinks:Boolean;

  ngOnInit() {
    this.href=this.router.url;
    if(this.href == "/" || this.href =="/login" || this.href =="/signup" || this.href=="/mentor-login" || this.href=="/mentor-signup" || this.href=="/logoff"){
      this.hasNavbarLinks=true;
    }
  }

}
