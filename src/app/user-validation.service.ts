import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  u_name: any;
  m_name:any;
  full_name:any;
  courseName:any;
  startDate:any;
  endDate:any;

  private baseUrl='http://localhost:8761';
  constructor(private http:HttpClient){}
  
  getUserDetails():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}` + '/userapi/userdetailsapi/userdetails');
  }

  createUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/userapi/userdetailsapi/userdetails',user);
    
  }
  blockUser(userName:String):Observable<object>{
    return this.http.get(`${this.baseUrl}` + '/userapi/userdetailsapi/userdetailsblock/' + `${userName}`);
    
  }
  unblockUser(userName:String):Observable<object>{
    return this.http.get(`${this.baseUrl}` + '/userapi/userdetailsapi/userdetailsunblock/' + `${userName}`);
    
  }
  blockMentor(userName:String):Observable<object>{
    return this.http.get(`${this.baseUrl}` + '/mentorapi/mentordetailsapi/mentordetailsblock/' + `${userName}`);
    
  }
  unblockMentor(userName:String):Observable<object>{
    return this.http.get(`${this.baseUrl}` + '/mentorapi/mentordetailsapi/mentordetailsunblock/' + `${userName}`);
    
  }
  createMentor(mentor:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/mentorapi/mentordetailsapi/mentordetails',mentor);
    
  }
  createMentorCalendar(mentorCalendar:object,userName:String):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/mentorcalendar/'+ `${userName}`,mentorCalendar);
    
  }
  searchMentor(techName:any):Observable<object>{
    return this.http.get(`${this.baseUrl}` + '/mentorapi/mentordetailsapi/mentordetails/' + `${techName}`);
    
  }
  getMentorDetails():Observable<Mentor>{
    return this.http.get<Mentor>(`${this.baseUrl}` + '/mentorapi/mentordetailsapi/mentordetails');
  }

  createTechnology(technologies:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/technologyapi/technologydetailsapi/technologies',technologies);
    
  }
  getTechnologies():Observable<Technologies>{
    return this.http.get<Technologies>(`${this.baseUrl}` + '/technologyapi/technologydetailsapi/technologies');
  }

  deleteTechnology(technologyName:String):Observable<Technologies>{
    return this.http.delete<Technologies>(`${this.baseUrl}` + '/technologyapi/technologydetailsapi/technologies/'+ `${technologyName}`);
  }

  createSkill(skill:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/skillsapi/skilldetailsapi/skills',skill);
    
  }
  getSkills(mentorName:String):Observable<MentorSkills>{
    return this.http.get<MentorSkills>(`${this.baseUrl}` + '/skillsapi/skilldetailsapi/skills/' + `${mentorName}`);
  }

  deleteSkill(skillName:String):Observable<MentorSkills>{
    return this.http.delete<MentorSkills>(`${this.baseUrl}` + '/skillsapi/skilldetailsapi/skills'+ `${skillName}`);
  }


}
export class User{
  userName:String;
  password:String;
  fullName:String;
  isBlocked:String;
}[];
export class Mentor{
  userName:String;
  password:String;
  fullName:String;
  fees:number;
  courseName:String;
  linkedinUrl:String;
  isBlocked:String;
 
}[];
export class MentorCalendar{
  
  startDate:Date;
  endDate:Date;
}
export class Technologies{
  technologyName:String;
  commission:number;
}[];

export class MentorSkills{
  sNo:number;
  skillName:String;
  proficiency:String;
  mentorName:String;
}[];
