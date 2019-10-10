import { Component, OnInit } from '@angular/core';
import { UserValidationService } from '../user-validation.service';

@Component({
  selector: 'app-admin-permissions',
  templateUrl: './admin-permissions.component.html',
  styleUrls: ['./admin-permissions.component.scss']
})
export class AdminPermissionsComponent implements OnInit {

  constructor(private userValidationService:UserValidationService) { }
  user=[];
  mentor=[];
  mentorDetails;
  userDetails;
  i;
  ngOnInit() {
    this.userDetails= this.userValidationService.getUserDetails().subscribe((data) => {
      var index=0;
      for(this.i=0;this.i<Object.keys(data).length;this.i++){
        this.user[index]=data[this.i];
        index++;
      }
   
})
this.mentorDetails= this.userValidationService.getMentorDetails().subscribe((data) => {
  var index=0;
  for(this.i=0;this.i<Object.keys(data).length;this.i++){
    this.mentor[index]=data[this.i];
    index++;
  }

})
  }
  onBlock(event,userName){
    this.userValidationService.blockUser(userName).subscribe((data)=>
    this.ngOnInit()

    );
  }
  onUnblock(event,userName){
    this.userValidationService.unblockUser(userName).subscribe((data)=>
    this.ngOnInit()


    );
  }
  onBlockMentor(event,userName){
    this.userValidationService.blockMentor(userName).subscribe((data)=>
    this.ngOnInit()
);
  }
  onUnblockMentor(event,userName){
    this.userValidationService.unblockMentor(userName).subscribe((data)=>
    this.ngOnInit()
);
  }

}
