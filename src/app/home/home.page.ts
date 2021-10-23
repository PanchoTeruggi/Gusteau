import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
img:string;
img2:string;
img3:string;
  constructor() { }

  ngOnInit() {
    this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdEVNJLFqTW79T_MahATxbmPLxzdOAc8P4Q&usqp=CAU.jpg'
    this.img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTBVqI7BBWFapyfwLQ-jS3mdMuEgwJQxfQw&usqp=CAU"
    this.img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC0mkmSsKGrxUYWZRQcN-pAStxXJBgl2dEA&usqp=CAU"

  }
}
