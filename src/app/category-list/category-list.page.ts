import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categoryList : any;

  constructor(public apiService: ApiService,
    public router: Router) { }

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

  createNotePage(){
    this.router.navigate(['/note-create'])

  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteCat(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllCategory();
    });
  }

  presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Votre catégorie à bien été supprimée';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }



}
