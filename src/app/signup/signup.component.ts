import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder,private router:Router,private userValidationService:UserValidationService) { }
  model:any={
    name:String,
    email:String,
    password:String,
    password2:String,
    errorMessage:String,
    invalidStatus:Boolean

  };
  signupForm: FormGroup;
  submitted = false;
  match=false;
  user:User;

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]

    });
    this.model.name="";
    this.model.email="";
    this.model.password="";
    this.model.password2="";
    this.model.errorMessage="";
  }
  get f() { return this.signupForm.controls; }

  
  onSubmit() {
    
    this.submitted=true;
    if(this.model.password != this.model.password2){
      this.model.errorMessage="passwords mismatch";
      this.model.invalidStatus=true;
      
    }
    else if(this.signupForm.valid){
      this.user=new User();
      this.user.fullName=this.signupForm.get('name').value;
      this.user.userName=this.signupForm.get('email').value;
      this.user.password=this.signupForm.get('password').value;
      this.save();
      this.router.navigate(['/login']);
    }
    
}
save(){
  this.userValidationService.createUser(this.user).subscribe(data => console.log(data),error=>console.log(error));
}
}
