import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  u_name: any;
  m_name:any;
  private baseUrl='http://localhost:8081/userdetailsapi';
  constructor(private http:HttpClient){}
  
  getUserDetails(url:string){
    return this.http.get(url);
  }

  createUser(user:object):Observable<object>{
    return this.http.post(`${this.baseUrl}` + '/userdetails',user);
    
  }

  getMentorDetails(url:string){
    return this.http.get(url);
  }
}
export class User{
  userName:String;
  password:String;
  fullName:String;
}

