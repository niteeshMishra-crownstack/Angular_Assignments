import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {Note} from './note.model'

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy {
  notes:Note[]  = []
  storageListenSub: Subscription

  constructor() { 
    //this take the value stored in localstorage
    this.loadState()

    this.storageListenSub =fromEvent(window,'storage').subscribe((event:StorageEvent)=>
    {
      if(event.key==='notes') this.loadState()
      //console.log("Storage event fired!")
      //console.log(event)
    })
  }

  getNotes()
  {
    return this.notes
  }

  getNote(id:string)
  {
   return  this.notes.find(n=>n.id ===id)
      
  }

  addNote(note:Note)
  {
    this.notes.push(note)
    this.saveState()
  }

  updateNote(id:string,updatedFields:Partial<Note>)
  {
    const note = this.getNote(id)
    Object.assign(note,updatedFields)
    this.saveState()
  }

  deleteNote(id:string)
  {
    const noteIndex = this.notes.findIndex(n=>n.id===id)
    if(noteIndex==-1) return
    this.notes.splice(noteIndex,1)
    this.saveState()
  }

  saveState()
  {
    //its actually saving the note in localstorage
    localStorage.setItem('notes',JSON.stringify(this.notes))
  }

  loadState()
  {
    try{
      const notesInStorage = JSON.parse(localStorage.getItem('notes'))
     // if(!notesInStorage) return
      this.notes.length=0//clear the notes array
      this.notes.push(...notesInStorage)
    }
    catch(e)
    {
       console.log("There was an error retriving data from local storage ")
       console.log(e)
    }
    
  }

  ngOnDestroy()
  {
    if(this.storageListenSub) this.storageListenSub.unsubscribe()
  }

}
