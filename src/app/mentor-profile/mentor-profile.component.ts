import { Component, OnInit } from '@angular/core';
import { UserValidationService } from '../user-validation.service';
@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.scss']
})
export class MentorProfileComponent implements OnInit {


  constructor(private userservice:UserValidationService) { }
m_name: any;
  ngOnInit() {
    this.m_name=this.userservice.m_name;
  }

}
