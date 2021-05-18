import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators,FormArray} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive-Form';

  userForm:FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder){}
//initialization done inside ngOnInIt
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      phoneNumber:['',[Validators.required,Validators.minLength(10)]],
      addPhoneNumber :this.fb.array([]),
      
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      // isAccepted: [false, Validators.requiredTrue]
    })
  }

  get Helper() {
    return this.userForm.controls
  }

  get addPhoneNumber()
  {
    return this.userForm.get('addPhoneNumber') as FormArray
  }

  addAdditionalNumber()
  {
    this.addPhoneNumber.push(this.fb.control(''))
  }

 


  onSubmit() {
    console.log(this.userForm.status)
    this.submitted = true;

    
    // console.log(this.userForm)
    // console.log(this.Helper);
    
     if (this.userForm.status==="INVALID") {
       return  alert("Please fill out form first");
     }

    // console.table(this.userForm.value)
    // console.table(this.userForm)

    alert('Signup Completed')
    this.userForm.reset();


  }
// resetting the form
  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }


   


}
