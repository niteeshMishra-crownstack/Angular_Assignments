import { Component } from '@angular/core';
import { getMaxListeners } from 'process';
import {User} from '../app/shared/user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf1';
  submitted: boolean = false;

  userModel = new User('',"","",false)

  onSubmit() {
    this.submitted = true;
  }

 



}
