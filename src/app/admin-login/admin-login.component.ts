import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder,private router:Router) { }
  adminLoginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.adminLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.adminLoginForm.controls; }

  onSubmit() {
    this.submitted=true;
    if(this.adminLoginForm.valid){
      this.router.navigate(['/admin-permissions']);
    }
  }

}
  
