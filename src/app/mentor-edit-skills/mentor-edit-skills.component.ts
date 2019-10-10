import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserValidationService, MentorSkills } from '../user-validation.service';

@Component({
  selector: 'app-mentor-edit-skills',
  templateUrl: './mentor-edit-skills.component.html',
  styleUrls: ['./mentor-edit-skills.component.scss']
})
export class MentorEditSkillsComponent implements OnInit {
i;
skillForm:FormGroup;
skill:MentorSkills;
skills=[];
  constructor(private formBuilder: FormBuilder,private userValidationService:UserValidationService) { }

  ngOnInit() {
    this.skillForm = this.formBuilder.group({
      skillName:['',[Validators.required]],
    proficiency:['',[Validators.required]]
  });
  this.userValidationService.getSkills(this.userValidationService.m_name).subscribe((data) => {
    var index=0;
    for(this.i=0;this.i<Object.keys(data).length;this.i++){
      this.skills[index]=data[this.i];
      index++;
    }
 
})
}
get f() { return this.skillForm.controls; }
  onSubmit(){
    this.skill=new MentorSkills();

    this.skill.skillName=this.skillForm.get('skillName').value;
    this.skill.proficiency=this.skillForm.get('proficiency').value;
    this.skill.mentorName=this.userValidationService.m_name;
    console.log(this.skill.mentorName);
    this.save();
    
  }
  // deleteSkill(event,skillName){
  //   this.userValidationService.deleteTechnology(skillName).subscribe((data)=>
  //     this.ngOnInit()
  //   );
  // }
  save(){
    
    this.userValidationService.createSkill(this.skill).subscribe((data)=>
      this.ngOnInit()
    );
   
}

}
