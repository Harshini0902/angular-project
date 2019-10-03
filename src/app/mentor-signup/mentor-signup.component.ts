import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Mentor, UserValidationService } from '../user-validation.service';

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
    courseName:String,
    errorMessage:String,
    linkedinurl:String,
    invalidStatus:Boolean

  };
  mentor:Mentor;
  mentorSignupForm: FormGroup;
  submitted = false;
  match=false;
 
  constructor(private formBuilder: FormBuilder,private router:Router,private userValidationService:UserValidationService) { }

  ngOnInit() {
    this.mentorSignupForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      courseName:['',[Validators.required]],
      linkedinurl:['',[Validators.required]]

    });
    this.model.name="";
    this.model.email="";
    this.model.password="";
    this.model.password2="";
    this.model.linkedinurl="";
    this.model.errorMessage="";
    this.model.courseName="";
  }
  get f() { return this.mentorSignupForm.controls; }

  
  onSubmit() {
    
    this.submitted=true;
    if(this.model.password != this.model.password2){
      this.model.errorMessage="passwords mismatch";
      this.model.invalidStatus=true;
      
    }
    else if(this.mentorSignupForm.valid){
      this.mentor=new Mentor();
      this.mentor.fullName=this.mentorSignupForm.get('name').value;
      this.mentor.userName=this.mentorSignupForm.get('email').value;
      this.mentor.password=this.mentorSignupForm.get('password').value;
      this.mentor.courseName=this.mentorSignupForm.get('courseName').value;
      this.mentor.linkedinUrl=this.mentorSignupForm.get('linkedinurl').value;
      this.save();
     this.router.navigate(['/mentor-login']);
    }
    
}
save(){
  this.userValidationService.createMentor(this.mentor).subscribe(data => console.log(data),error=>console.log(error));
}
}
