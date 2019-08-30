import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trainers } from '../trainers';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.scss']
})
export class TrainerDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
trainer=[];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var index=0;
      for(var ind=0;ind<trainers.length;ind++){
        if(trainers[ind].tech == params.get('techName')){
          this.trainer[index]=trainers[ind];
          index++;  
        }
      }
    });
  }

}
