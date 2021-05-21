import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialReactiveForm';

  constructor(private fb:FormBuilder)
  {
    
  }

  profileForm = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',Validators.required],
    address:['',Validators.required],
    dob:['',Validators.required],
    gender:['',Validators.required]
  })

  saveForm()
  {
    console.log("Form data is" , this.profileForm.value)

    if(this.profileForm.valid)
    {
      alert("Registered Successfully")
    }
    
    //this.profileForm.reset()
  }


}
