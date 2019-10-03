import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trainers } from '../trainers';
import { UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.scss']
})
export class TrainerDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userValidationService:UserValidationService) { }
trainer=[];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userValidationService.searchMentor(this.userValidationService.courseName).subscribe(data => console.log(data),error=>console.log(error));
      
    });
  }

}
