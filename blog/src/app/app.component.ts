import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';

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
}
