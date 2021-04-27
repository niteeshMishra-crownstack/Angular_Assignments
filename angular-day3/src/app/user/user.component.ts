import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() parentFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit("niteesh")
  }

}
