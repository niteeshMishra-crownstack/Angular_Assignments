import { Component, ElementRef,Input, OnInit, ViewChild,Renderer2, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() title:String
  @Input() body:String
  @Input() link:String

  @Output('delete') deleteEvent : EventEmitter<void> = new EventEmitter<void>();

   @ViewChild('truncator') truncator!:ElementRef<HTMLElement>
   @ViewChild('bodyText') bodyText!:ElementRef<HTMLElement>
  constructor(private renderer:Renderer2) { }

  ngAfterViewInit()
  {
     //workout if there is a text  overflow and if not, then hide the truncator
     console.log(this.bodyText)
     let style = window.getComputedStyle(this.bodyText.nativeElement,null)
     let viewableHeight = parseInt(style.getPropertyValue("max-height"),10)

     if(this.bodyText.nativeElement.scrollHeight>viewableHeight)
     {
       //if there is a text overflow, show the fade out truncator
       this.renderer.setStyle(this.truncator.nativeElement,'display','block')
 
     }
   else{
     //else hide the fade out truncator
     this.renderer.setStyle(this.truncator.nativeElement,'display','none')
   }

  

  }

  ngOnInit(): void {

   
    
  
  }
  onXButtonClick()
  {
    this.deleteEvent.emit()
  }

  }


