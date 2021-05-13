import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {SuperHero} from './superhero'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  id:number

  ngOnInIt()
  {
    this.id=0;
  }


  weapons = ['Iron suit', 'Hammer', "Bow And Arrow]","Shield","Raw Power"];

  specialities =['Technology','God of Thunder','Aechery','Leadership','Scientiest']

  model = new SuperHero(1,"Iron Man",this.weapons[0],this.specialities[0],"Tony Stark")

  submitted =false
  onSubmit()
  {
    this.submitted=true
    console.log(this.model.name)
    console.log(this.model.speciality)
    console.log(this.model.weapon)
    console.log(this.model.realname)
  }

  newSuperHero()
  {
    this.id = this.id+1;
    this.model = new SuperHero(this.id,"","","")
  }
 
}


