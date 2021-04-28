import { Component } from '@angular/core';
// import {MyServiceService} from './my-service.service';
import { ApiServiceService } from './api-service.service'

interface dataType
{
  name:string,
  id:number,
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-day3';
 // data ="Bruce"
  name="nitEeSh miShra"
  today = Date.now()
  str = "Angular Developer"
  money=100;
  userName = "";
  data:any =[]

  // constructor(private user:MyServiceService)
  // {
  //   console.log(this.user.getData())
  //   this.userName = this.user.getData().userName
  // }

  constructor(private apiCall: ApiServiceService)
  {
    this.apiCall.getData().subscribe(data=>
      {
        console.log(data)
        this.data = data
      })
  }

  // parentFunction(data:any)
  // {
  //   console.warn(data)
  // }
  users = [
    {
    name:"peter",
    age:30,
    address :"Delhi"
  },
    {
    name:"vyu",
    age:32,
    address :"noida"
  },
    {
    name:"ryu",
    age:38,
    address :"bhopal"
  },
    {
    name:"kelly",
    age:34,
    address :"goa"
  },
]
giveData()
{
  const data:dataType = 
  {
    name:"niteesh",
    id:10,
    indian:true
  }
  return data;
}

}
