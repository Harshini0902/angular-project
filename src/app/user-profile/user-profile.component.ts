import { Component, OnInit } from '@angular/core';
import { UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userservice:UserValidationService) { }
u_name;
  ngOnInit() {
    this.u_name=this.userservice.u_name;
  }

}
