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
mentorDetails;
i;
  ngOnInit() {
   
     this.mentorDetails= this.userValidationService.searchMentor(this.userValidationService.courseName).subscribe((data) => {
      var index=0;
      for(this.i=0;this.i<Object.keys(data).length;this.i++){
        this.trainer[index]=data[this.i];
        index++;
      }
   
})
}
}