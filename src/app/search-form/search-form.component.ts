import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
Technologies:string[]=['Java','Angular','MySql'];
  techName: any;
  // dates:any;
  startdates:any;
  enddates:any;
  searchForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router,private searchService:SearchService,private userValidationService:UserValidationService) {}

  ngOnInit() {
    // this.dates.startdates=new Date();
    // this.dates.enddates=new Date();
   
    this.searchForm = this.formBuilder.group({
      techName:['',[Validators.required]],
      startdates:[new Date(),[Validators.required]],
      enddates:[new Date(),[Validators.required]]
     
    });
  }

  get f() { return this.searchForm.controls; }
  changeTechnology(e) {
    this.techName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  onSearch(){
    this.submitted=true;
     this.techName=this.searchForm.get('techName').value;
    
     if(this.searchForm.valid){
   
      this.userValidationService.courseName=this.techName;
      this.userValidationService.startDate=this.searchForm.get('startdates').value;
      this.userValidationService.endDate=this.searchForm.get('enddates').value;
     console.log(this.searchForm.get('enddates').value);
      this.router.navigate(['/trainers',this.techName]);
      console.log(this.searchForm.get('startdates').value);
    }
    
  }
  // save(){
  //   this.userValidationService.searchMentor(this.techName).subscribe(data => console.log(data),error=>console.log(error));
  // }
  
}
