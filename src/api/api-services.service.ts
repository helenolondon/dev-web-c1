import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const dadosUrl: string = "api/dados.json";

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
   
  constructor(private http: HttpClient) { }

  RetDadosInternacional(){
    
    return this.http.get(dadosUrl);
  }
  
}
