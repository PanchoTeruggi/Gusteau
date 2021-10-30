import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrateService {

  constructor(private http: HttpClient) { }

  cargardatos(datos){return this.http.post ('https://localhost:3001/Usuario', [datos]);}
}
