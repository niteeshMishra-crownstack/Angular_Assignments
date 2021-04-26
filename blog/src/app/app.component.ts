import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';
  //for property binding
  person = "Niteesh";
  buttonDisabled = true;
  show =false;

  color="green";

  myColor = "green";

  myCustomColor = "red";
  err =false;

  updateColor()
  {
    this.myCustomColor= "blue"
  }

 // data = ['anil','sam','peter','bruce']
 data = [
   {
     name:"anil",
     age:79,
     email:"anil@gmail.com"
   },
   {
     name:"peter",
     age:25,
     email:"peter@gmail.com"
   },
   {
     name:"hog",
     age:28,
     email:"hog@gmail.com"
   },
   {
     name:"gause",
     age:22,
     email:"gause@gmail.com"
   },
 ]


  // name="Niteesh"
  
  // getName()
  // {
  //   alert("Niteesh Mishra");
  // }

  // obj ={
  //   name:"honey",
  //   age:20
  // }

  // arr =['bruce','peter','honey'];

  myEvent(evt:any)
  {
    console.log(evt)
  }

  disabledBox = true;
  enableBox()
  {
    this.disabledBox=false;
  }
//  currentVal = "";
//   getval(val:any)
//   {
    
//     console.warn(val)
//     this.currentVal = val;
//   }

getValues(val:any)
{
  console.log(val)
}

}
