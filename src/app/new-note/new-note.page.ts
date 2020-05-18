import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { Note } from 'src/models/note.model';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {

  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';
  type: string = '';

  constructor(private noteService: NoteService, private router: Router) {
      this.formGroup = new FormGroup({
        title: new FormControl(),
        content: new FormControl(),
        type: new FormControl(),
      })
      
   }

  ngOnInit() {
  }

  saveNote(note: Note){
    this.noteService.saveNote(note);
    this.router.navigate(['/home']);
    console.log(this.noteService.getAllNotes())
  }



}
