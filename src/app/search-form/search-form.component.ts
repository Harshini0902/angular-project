import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
Technologies:string[]=['Java','Angular','MySql'];
  techName: any;
  dates:any;
  searchForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router,private searchService:SearchService) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      techName:['',[Validators.required]],
      dates:['',[Validators.required]]
     
    });
  }

  get f() { return this.searchForm.controls; }
  changeTechnology(e) {
    this.techName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  onSearch(value){
    this.submitted=true;
     this.techName=value.techName;
    // this.searchService.searchTechnology(this.techName,this.router);
     if(this.searchForm.valid){
       this.router.navigate(['/trainers',this.techName]);
    }
    
  }

  
}
