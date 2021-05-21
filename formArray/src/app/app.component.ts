import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder,FormArray,Validators} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formArray';
  regForm:FormGroup;
  constructor(private fb : FormBuilder)
  {

  }

  ngOnInit() :void
  {
   this.regForm = this.fb.group({
     name:['',[Validators.required,Validators.minLength(3)]],
     email:['',[Validators.required,Validators.email]],
     phoneNo:['',[Validators.required,Validators.minLength(10)]],
     status:['',Validators.required],
     address:this.fb.group({
       city:["",Validators.required],
       state:[" ",Validators.required]
     }),
     moreAddress:this.fb.array([

     ]),
     agreed:['',Validators.required]
   })
  }

  get formValue():any {
    return this.regForm.controls
  }

  get moreAddress()
  {
    return this. regForm.get('moreAddress') as any
  }

  addMoreAddress()
  {
    //this.moreAddress.push(this.fb.control(''))
    this.moreAddress.push(this.fb.group({
      addr_label:['',Validators.required],
      addr_value:['',Validators.required]
    }))
  }

  onSubmit()
  {
     alert("Registration Done")
    console.log(this.regForm.value)
    this.regForm.reset();
  }
}
