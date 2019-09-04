import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  model:any={
    email:String,
    password:String
  }


  constructor(private formBuilder: FormBuilder,private router:Router) { }
  adminLoginForm: FormGroup;
  submitted = false;
  match=false;
  correctEmail:String="test@gmail.com";
  correctPassword:String="iamadmin";
  ngOnInit() {
    this.adminLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
    this.model.email="";
    this.model.password="";
  }
  get f() { return this.adminLoginForm.controls; }

  onSubmit() {
    this.submitted=true;
    
    if(this.correctEmail == this.model.email && this.correctPassword==this.model.password){
     
      this.router.navigate(['/admin-permissions']);
    }else{
      this.model.errorMessage="username and password mismatch";
      this.model.invalidStatus=true;
    }
      
    }
    

}
  
