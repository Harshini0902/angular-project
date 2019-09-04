import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.scss']
})
export class MentorSignupComponent implements OnInit {
  model:any={
    name:String,
    email:String,
    password:String,
    password2:String,
    errorMessage:String,
    linkedinurl:String,
    invalidStatus:Boolean

  };
  mentorSignupForm: FormGroup;
  submitted = false;
  match=false;
 
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.mentorSignupForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      linkedinurl:['',[Validators.required]]

    });
    this.model.name="";
    this.model.email="";
    this.model.password="";
    this.model.password2="";
    this.model.linkedinurl="";
    this.model.errorMessage="";
  }
  get f() { return this.mentorSignupForm.controls; }

  
  onSubmit() {
    
    this.submitted=true;
    if(this.model.password != this.model.password2){
      this.model.errorMessage="passwords mismatch";
      this.model.invalidStatus=true;
      
    }
    else if(this.mentorSignupForm.valid){
      this.router.navigate(['/mentor-login']);
    }
    
}

}
