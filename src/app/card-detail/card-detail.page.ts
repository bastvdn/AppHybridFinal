import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../service/note.service';
import { Note } from 'src/models/note.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage implements OnInit {
  note: Note;


  constructor(private noteService: NoteService, public router: Router) {

    


   }

  ngOnInit() {
  }

}
