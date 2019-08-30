import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
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
  searchForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router,private searchService:SearchService) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      techName:'',
      date:''
    });
  }

  get f() { return this.searchForm.controls; }
  changeTechnology(e) {
    this.techName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  onSearch(value){
    this.techName=value.techName;
    this.searchService.searchTechnology(this.techName,this.router);
  }

}
