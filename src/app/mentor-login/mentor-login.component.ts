import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {
  jsonURL;
  details:any;
  index:any;
  validStatus:boolean;
  constructor(private formBuilder: FormBuilder,private router:Router,private userservice:UserValidationService) { }
  model:any={
    email:String,
    password:String,
    errorMessage:String,
    invalidStatus:Boolean

  };
  mentorLoginForm: FormGroup;
  submitted = false;
  match=false;
  ngOnInit() {
    this.mentorLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.model.email="";
    this.model.password="";
    this.model.errorMessage="";
    this.model.invalidStatus=false;
  }
  get f() { return this.mentorLoginForm.controls; }

  onSubmit() {
    this.submitted=true;
   
    this.userservice.getMentorDetails().subscribe((data =>{
      
      this.details=data;
      for(this.index=0;this.index<(this.details.length);this.index++){
        if(this.details[this.index].userName == this.model.email && this.details[this.index].password == this.model.password ){
         
          this.userservice.m_name=this.details[this.index].userName;
          this.userservice.full_name=this.details[this.index].userName;
          console.log(this.userservice.m_name);
          this.match=true;
          break;
        }
        else{
          this.match=false;
        }
      }
        if(this.match == true){
          this.router.navigate(['/mentor-profile']);
        }
        else{
          this.model.errorMessage="username and password mismatch";
          this.model.invalidStatus=true;
        }
     
    }))
  }
}
