import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class recetasService {

  constructor(private http: HttpClient) { }
  getData(){
        return this.http.get('http://localhost:3001/Receta');
      }
    
}