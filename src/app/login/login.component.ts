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
    this.jsonURL='/assets/userCredentials.json';
    this.userservice.getUserDetails(this.jsonURL).subscribe((data =>{
      
      this.details=data;
      for(this.index=0;this.index<(this.details.length);this.index++){
        if(this.details[this.index].email == this.model.email && this.details[this.index].password == this.model.password ){
          this.userservice.u_name=this.details[this.index].name;
         this.match=true;
        }
        if(this.match && this.loginForm.valid){
          this.router.navigate(['/profile']);
        }
     
    }
      
      
    
    
        
      
    }))
    if(this.match == false){
      this.model.errorMessage="Username or password mismatch";
    }
 
   
  }

}


