import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
  loginForm: FormGroup;
  submitted = false;
  match=false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.model.email="";
    this.model.password="";
    this.model.errorMessage="";
   
  }
  get f() { return this.loginForm.controls; }


  onSubmit() {
    
    this.submitted=true;
   
    this.userservice.getUserDetails().subscribe((data =>{
      
      this.details=data;
      for(this.index=0;this.index<(this.details.length);this.index++){
        if(this.details[this.index].userName == this.model.email && this.details[this.index].password == this.model.password ){
          this.userservice.u_name=this.details[this.index].userName;
          this.userservice.full_name=this.details[this.index].fullName
          this.match=true;
          break;
        }
        else{
          this.match=false;
        }
      }
        if(this.match == true){
          this.router.navigate(['/profile']);
        }
        else{
          this.model.errorMessage="username and password mismatch";
          this.model.invalidStatus=true;
        }
     
    }))
  }
}
