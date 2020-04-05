import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DxSelectBoxComponent } from 'devextreme-angular';

const dadosUrl: string = "api/dados.json";

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  
  paises: any[]; 
  
  constructor(private http: HttpClient) { }

  RetDadosInternacional(){
    return this.http.get(dadosUrl);
  }

  RetListaDePaises(){
    return this.RetDadosInternacional()
  }  
}
