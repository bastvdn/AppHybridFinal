import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[]=[]; 

  constructor(public storage: Storage) { }

  getAllNotes(){
    return this.storage.get('notes').then(
      (notes) => {
        this.notes = notes == null ? [] : notes;
        return [...this.notes];

      }
    )

  }
  saveNote(note: Note){
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }


}
