import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit {

  sub: any;
  note: any;


  constructor(public apiService: ApiService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        console.log(params);
        this.note = params;

      });

    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
