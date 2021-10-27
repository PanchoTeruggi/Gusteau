import { Component, OnInit } from '@angular/core';
import { recetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {
  public traenombre:any;
  constructor(private recetasService: recetasService) {}

  ngOnInit(){
        this.recetasService.getData().subscribe(data =>{
          this.traenombre=data;
    console.log(data);
        })
      }

}
