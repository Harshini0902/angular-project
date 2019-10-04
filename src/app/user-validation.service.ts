import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  u_name: any;
  m_name:any;
  courseName:any;
  startDate:any;
  endDate:any;

  private baseUrl='http://localhost:8081/userdetailsapi';
  constructor(private http:HttpClient){}
  
  getUserDetails():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}` + '/userdetails');
  }

  createUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/userdetails',user);
    
  }
  createMentor(mentor:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/mentordetails',mentor);
    
  }
  createMentorCalendar(mentorCalendar:object,userName:String):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/mentorcalendar/'+ `${userName}`,mentorCalendar);
    
  }
  searchMentor(techName:any):Observable<object>{
    return this.http.get(`${this.baseUrl}` + '/mentordetails/' + `${techName}`);
    
  }
  getMentorDetails():Observable<Mentor>{
    return this.http.get<Mentor>(`${this.baseUrl}` + '/mentordetails');
  }
}
export class User{
  userName:String;
  password:String;
  fullName:String;
}
export class Mentor{
  userName:String;
  password:String;
  fullName:String;
  fees:number;
  commission:number;
  courseName:String;
  linkedinUrl:String;
  isblocked:String;
}[];
export class MentorCalendar{
  
  startDate:Date;
  endDate:Date;
}
