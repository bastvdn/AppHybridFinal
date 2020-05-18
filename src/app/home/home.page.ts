import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../service/note.service';
import { Note } from 'src/models/note.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: Promise<Note[]>;

  constructor(private router: Router, private noteService: NoteService) {}

  ionViewWillEnter(){
    //console.log("ok")
    this.notes = this.getAllNotes()
    console.log(this.notes)
  }

  addNote(){
    this.router.navigate(['/new-note'])

  }
  cardDetail(){
    this.router.navigate(['/card-detail'])

  }
  getAllNotes(){
    return this.noteService.getAllNotes();
  }




}
