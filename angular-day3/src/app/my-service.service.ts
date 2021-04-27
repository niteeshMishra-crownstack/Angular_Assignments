import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  getData()
  {
    return {
      userName:'priya',
      age:35,
      id:100
    }
  }
}
