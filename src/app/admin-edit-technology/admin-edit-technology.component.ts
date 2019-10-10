import { Component, OnInit } from '@angular/core';
import { Technologies, UserValidationService } from '../user-validation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-technology',
  templateUrl: './admin-edit-technology.component.html',
  styleUrls: ['./admin-edit-technology.component.scss']
})
export class AdminEditTechnologyComponent implements OnInit {
technology:Technologies;
techForm: FormGroup;
i;
tech=[];
  constructor(private formBuilder: FormBuilder,private userValidationService:UserValidationService) { }

  ngOnInit() {
    this.techForm = this.formBuilder.group({
      technologyName:['',[Validators.required]],
      commission:['',[Validators.required]]
  });
  this.userValidationService.getTechnologies().subscribe((data) => {
    var index=0;
    for(this.i=0;this.i<Object.keys(data).length;this.i++){
      this.tech[index]=data[this.i];
      index++;
    }
 
})
}
get f() { return this.techForm.controls; }
  onSubmit(){
    this.technology=new Technologies();
    this.technology.technologyName=this.techForm.get('technologyName').value;
    this.technology.commission=this.techForm.get('commission').value;
    this.save();
    
  }
  deleteTechnology(event,technologyName,index){
    this.userValidationService.deleteTechnology(technologyName).subscribe((data)=>
  //   this.userValidationService.getTechnologies().subscribe((data) => {
  //     // var index=0;
  //     // for(this.i=0;this.i<Object.keys(data).length;this.i++){
  //     //   this.tech[index]=data[this.i];
  //     //   index++;
  //     // }
      
   
  // })
  this.tech.splice(index,1)
    );
  }
  save(){
    
    this.userValidationService.createTechnology(this.technology).subscribe((data)=>
   this.ngOnInit()
    );
   
}
}
