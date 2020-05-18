import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  studentsData: any;


  constructor(public router: Router, public apiService: ApiService) {}

  createNotePage(){
    this.router.navigate(['/note-create'])

  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;
    })
  }

  getAllCategory() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;
    })
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllStudents();
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllStudents();
    });
  }

  presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Votre note à été supprimée';
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }

  check_note(item){
    console.log(item);
    
    item.cat = item.category.name;
    this.router.navigate(['/view-note'], {queryParams: item  })
  }

  

}
