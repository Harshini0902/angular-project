import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  searchTechnology(techName,router:Router){
    console.log(router.url);
    router.navigate(['trainers',techName]);
  }
}
