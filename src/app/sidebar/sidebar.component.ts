import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
isUser:boolean;
isMentor:boolean;
isAdmin:boolean;
public href : String='';
  constructor(private router:Router) { }

  ngOnInit() {
    this.href=this.router.url;
    if(this.href == "/profile" || this.href == "/edit-profile" || this.href == "/current-trainings" || this.href == "/completed-trainings" || this.href == "/user-search"){
      this.isUser=true;
 }else if(this.href == "/mentor-profile" || this.href == "/mentor-edit-profile" || this.href == "/mentor-trainings" || this.href == "/mentor-edit-skills" || this.href == "/mentor-payments"){
   this.isMentor=true;

 }else if(this.href == "/admin-permissions" || this.href == "/admin-edit-technology" || this.href == "/change-commission" || this.href == "/admin-reports"){
   this.isAdmin= true;
 }

}
}