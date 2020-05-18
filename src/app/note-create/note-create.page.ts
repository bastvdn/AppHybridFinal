import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.page.html',
  styleUrls: ['./note-create.page.scss'],
})
export class NoteCreatePage implements OnInit {

  data : Notes;
  categoryList : any;
  cat : number;
  cate : Category;

  constructor(public apiService: ApiService,
    public router: Router) { 
      
      this.data = new Notes();
      this.cate = new Category();
    }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    //Get saved list of students
    this.apiService.getCatList().subscribe(response => {
      console.log(response);
      this.categoryList = response;
    })
  }

  getNote(id){
    this.apiService.getItem(id).subscribe(response => {
      console.log(response);
      
    })
  }

  getCat(id){
    this.apiService.getCatItem(this.cat).subscribe(response => {
      console.log(response);
      this.data.category = response;
      this.confirm();
    })
  }

  submitForm() {
    this.getCat(this.cat);
    
    
    
  }

  confirm(){
    this.apiService.createItem(this.data).subscribe((response) => {
      this.presentToast();
      this.router.navigate(['/home']);
    });


  }

  presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Votre note à été ajoutée';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }


}
