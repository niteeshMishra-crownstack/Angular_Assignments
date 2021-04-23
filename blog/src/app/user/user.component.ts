import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

 

  
  myName = "Doe";
  getName(name:string)
  {
    alert(name)
  }

}
