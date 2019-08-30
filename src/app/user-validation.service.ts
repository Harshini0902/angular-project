import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  u_name: any;
  m_name:any;
  constructor(private http:HttpClient){}
  getUserDetails(url:string){
    return this.http.get(url);
  }
  getMentorDetails(url:string){
    return this.http.get(url);
  }
}
