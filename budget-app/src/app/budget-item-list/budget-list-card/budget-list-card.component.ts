import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

import { BudgetItem } from 'src/shared/model/budget-item-model';

@Component({
  selector: 'app-budget-list-card',
  templateUrl: './budget-list-card.component.html',
  styleUrls: ['./budget-list-card.component.scss']
})
export class BudgetListCardComponent implements OnInit {
  @Input() item:BudgetItem
  @Output() xButtonClick :EventEmitter<any> = new EventEmitter<any>()
  @Output() cardClick :EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick()
  {
    // here we want emit an event

    this.xButtonClick.emit();
  }

  onCardClick()
  {
    this.cardClick.emit()
  }

}
