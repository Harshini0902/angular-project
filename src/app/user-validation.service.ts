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

  private baseUrl='http://localhost:8761';
  constructor(private http:HttpClient){}
  
  getUserDetails():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}` + '/userapi/userdetailsapi/userdetails');
  }

  createUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/userapi/userdetailsapi/userdetails',user);
    
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
