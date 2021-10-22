import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
img:string;
  constructor() { }

  ngOnInit() {
    this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdEVNJLFqTW79T_MahATxbmPLxzdOAc8P4Q&usqp=CAU.jpg'
  }

}
