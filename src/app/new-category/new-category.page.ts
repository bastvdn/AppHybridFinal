import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.page.html',
  styleUrls: ['./new-category.page.scss'],
})
export class NewCategoryPage implements OnInit {

  categoryList: any
  data: Category
  lastId: number

  constructor(public apiService: ApiService,
    public router: Router) {
      this.data = new Category();
      this.getAllCategory();
     }

  ngOnInit() {
  }

  submitCat() {
    
    console.log(this.data)
  
    this.apiService.createCat(this.data).subscribe((response) => {
      this.presentToast();
      this.router.navigate(['/home']);
    });
  }

  getAllCategory() {
    //Get saved list of students
    this.apiService.getCatList().subscribe(response => {
      console.log(response);
      this.categoryList = response;
      
      
    })
  }

  getCat(id){
    this.apiService.getCatItem(16).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Votre catégorie à bien été ajoutée';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }

}
