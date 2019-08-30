import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  searchTechnology(techName,router:Router){
    router.navigate(['trainers',techName]);
  }
}
