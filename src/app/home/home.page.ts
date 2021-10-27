import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recetacard: any[] =Array(3);
  public traenombre:any;

constructor(private homeService: HomeService) {}
ngOnInit(){
      this.homeService.getReceta().subscribe(data =>{
        this.traenombre=data;
 console.log(data);
      })
    }
  
}
