import { Component, OnInit } from '@angular/core';
import { RegistrateService } from './registrate.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage implements OnInit {
public aliaschef: any;
public contra: any;
public emai: any;
public datos: any =[];
constructor(private registrateService: RegistrateService) {}

  ngOnInit() {
  }
enviarinfo(){
  this.datos.push(this.aliaschef);
  this.datos.push(this.contra);
  this.datos.push(this.emai);
  this.registrateService.cargardatos(this.datos).subscribe((d)=>{});
}

}
