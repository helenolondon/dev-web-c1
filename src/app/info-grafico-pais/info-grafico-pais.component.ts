import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServicesService } from 'src/api/api-services.service';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-info-grafico-pais',
  templateUrl: './info-grafico-pais.component.html',
  styleUrls: ['./info-grafico-pais.component.scss']
})
export class InfoGraficoPaisComponent implements OnInit {
  @ViewChild('selectPaises', { static: false }) selectPaises: DxSelectBoxComponent;
  
  titulo: string = "Casos por país";
  paises: any[];

  infoPais: any[];
  pais: any;

  constructor(private apiServices: ApiServicesService) { }

  ngOnInit() {
    this.apiServices.RetListaDePaises()
    .subscribe((resp: any) => {
      this.paises = resp;
    })
  }

  onSelPais(){
    if(this.selectPaises.value){
      this.carregarDadosDoGrafico(this.selectPaises.value);
    }
  }

  carregarDadosDoGrafico(pais: any){
    this.infoPais = [];
    
    this.infoPais.push({ dia: '1/1', qtdCasos: pais.janeiro.d1});
    this.infoPais.push({ dia: '2/1', qtdCasos: pais.janeiro.d2});
    this.infoPais.push({ dia: '3/1', qtdCasos: pais.janeiro.d3});
    this.infoPais.push({ dia: '4/1', qtdCasos: pais.janeiro.d4});
    this.infoPais.push({ dia: '5/1', qtdCasos: pais.janeiro.d5});
    this.infoPais.push({ dia: '6/1', qtdCasos: pais.janeiro.d6});
    this.infoPais.push({ dia: '7/1', qtdCasos: pais.janeiro.d7});
    this.infoPais.push({ dia: '8/1', qtdCasos: pais.janeiro.d8});
    this.infoPais.push({ dia: '9/1', qtdCasos: pais.janeiro.d9});
    this.infoPais.push({ dia: '10/1', qtdCasos: pais.janeiro.d10});
    this.infoPais.push({ dia: '11/1', qtdCasos: pais.janeiro.d11});
    this.infoPais.push({ dia: '12/1', qtdCasos: pais.janeiro.d12});
    this.infoPais.push({ dia: '13/1', qtdCasos: pais.janeiro.d13});
    this.infoPais.push({ dia: '14/1', qtdCasos: pais.janeiro.d14});
    this.infoPais.push({ dia: '15/1', qtdCasos: pais.janeiro.d15});
    this.infoPais.push({ dia: '16/1', qtdCasos: pais.janeiro.d16});
    this.infoPais.push({ dia: '17/1', qtdCasos: pais.janeiro.d17});
    this.infoPais.push({ dia: '18/1', qtdCasos: pais.janeiro.d18});
    this.infoPais.push({ dia: '19/1', qtdCasos: pais.janeiro.d19});
    this.infoPais.push({ dia: '20/1', qtdCasos: pais.janeiro.d20});
    this.infoPais.push({ dia: '21/1', qtdCasos: pais.janeiro.d21});
    this.infoPais.push({ dia: '22/1', qtdCasos: pais.janeiro.d22});
    this.infoPais.push({ dia: '23/1', qtdCasos: pais.janeiro.d23});
    this.infoPais.push({ dia: '24/1', qtdCasos: pais.janeiro.d24});
    this.infoPais.push({ dia: '25/1', qtdCasos: pais.janeiro.d25});
    this.infoPais.push({ dia: '26/1', qtdCasos: pais.janeiro.d26});
    this.infoPais.push({ dia: '27/1', qtdCasos: pais.janeiro.d27});
    this.infoPais.push({ dia: '28/1', qtdCasos: pais.janeiro.d28});
    this.infoPais.push({ dia: '29/1', qtdCasos: pais.janeiro.d29});
    this.infoPais.push({ dia: '30/1', qtdCasos: pais.janeiro.d30});
    this.infoPais.push({ dia: '31/1', qtdCasos: pais.janeiro.d31});

    this.infoPais.push({ dia: '1/2', qtdCasos: pais.fevereiro.d1});
    this.infoPais.push({ dia: '2/2', qtdCasos: pais.fevereiro.d2});
    this.infoPais.push({ dia: '3/2', qtdCasos: pais.fevereiro.d3});
    this.infoPais.push({ dia: '4/2', qtdCasos: pais.fevereiro.d4});
    this.infoPais.push({ dia: '5/2', qtdCasos: pais.fevereiro.d5});
    this.infoPais.push({ dia: '6/2', qtdCasos: pais.fevereiro.d6});
    this.infoPais.push({ dia: '7/2', qtdCasos: pais.fevereiro.d7});
    this.infoPais.push({ dia: '8/2', qtdCasos: pais.fevereiro.d8});
    this.infoPais.push({ dia: '9/2', qtdCasos: pais.fevereiro.d9});
    this.infoPais.push({ dia: '10/2', qtdCasos: pais.fevereiro.d10});
    this.infoPais.push({ dia: '11/2', qtdCasos: pais.fevereiro.d11});
    this.infoPais.push({ dia: '12/2', qtdCasos: pais.fevereiro.d12});
    this.infoPais.push({ dia: '13/2', qtdCasos: pais.fevereiro.d13});
    this.infoPais.push({ dia: '14/2', qtdCasos: pais.fevereiro.d14});
    this.infoPais.push({ dia: '15/2', qtdCasos: pais.fevereiro.d15});
    this.infoPais.push({ dia: '16/2', qtdCasos: pais.fevereiro.d16});
    this.infoPais.push({ dia: '17/2', qtdCasos: pais.fevereiro.d17});
    this.infoPais.push({ dia: '18/2', qtdCasos: pais.fevereiro.d18});
    this.infoPais.push({ dia: '19/2', qtdCasos: pais.fevereiro.d19});
    this.infoPais.push({ dia: '20/2', qtdCasos: pais.fevereiro.d20});
    this.infoPais.push({ dia: '21/2', qtdCasos: pais.fevereiro.d21});
    this.infoPais.push({ dia: '22/2', qtdCasos: pais.fevereiro.d22});
    this.infoPais.push({ dia: '23/2', qtdCasos: pais.fevereiro.d23});
    this.infoPais.push({ dia: '24/2', qtdCasos: pais.fevereiro.d24});
    this.infoPais.push({ dia: '25/2', qtdCasos: pais.fevereiro.d25});
    this.infoPais.push({ dia: '26/2', qtdCasos: pais.fevereiro.d26});
    this.infoPais.push({ dia: '27/2', qtdCasos: pais.fevereiro.d27});
    this.infoPais.push({ dia: '28/2', qtdCasos: pais.fevereiro.d28});
    this.infoPais.push({ dia: '29/2', qtdCasos: pais.fevereiro.d29});

    this.infoPais.push({ dia: '1/3', qtdCasos: pais.marco.d1});
    this.infoPais.push({ dia: '2/3', qtdCasos: pais.marco.d2});
    this.infoPais.push({ dia: '3/3', qtdCasos: pais.marco.d3});
    this.infoPais.push({ dia: '4/3', qtdCasos: pais.marco.d4});
    this.infoPais.push({ dia: '5/3', qtdCasos: pais.marco.d5});
    this.infoPais.push({ dia: '6/3', qtdCasos: pais.marco.d6});
    this.infoPais.push({ dia: '7/3', qtdCasos: pais.marco.d7});
    this.infoPais.push({ dia: '8/3', qtdCasos: pais.marco.d8});
    this.infoPais.push({ dia: '9/3', qtdCasos: pais.marco.d9});
    this.infoPais.push({ dia: '10/3', qtdCasos: pais.marco.d10});
    this.infoPais.push({ dia: '11/3', qtdCasos: pais.marco.d11});
    this.infoPais.push({ dia: '12/3', qtdCasos: pais.marco.d12});
    this.infoPais.push({ dia: '13/3', qtdCasos: pais.marco.d13});
    this.infoPais.push({ dia: '14/3', qtdCasos: pais.marco.d14});
    this.infoPais.push({ dia: '15/3', qtdCasos: pais.marco.d15});
    this.infoPais.push({ dia: '16/3', qtdCasos: pais.marco.d16});
    this.infoPais.push({ dia: '17/3', qtdCasos: pais.marco.d17});
    this.infoPais.push({ dia: '18/3', qtdCasos: pais.marco.d18});
    this.infoPais.push({ dia: '19/3', qtdCasos: pais.marco.d19});
    this.infoPais.push({ dia: '20/3', qtdCasos: pais.marco.d20});
    this.infoPais.push({ dia: '21/3', qtdCasos: pais.marco.d21});
    this.infoPais.push({ dia: '22/3', qtdCasos: pais.marco.d22});
    this.infoPais.push({ dia: '23/3', qtdCasos: pais.marco.d23});
    this.infoPais.push({ dia: '24/3', qtdCasos: pais.marco.d24});
    this.infoPais.push({ dia: '25/3', qtdCasos: pais.marco.d25});
    this.infoPais.push({ dia: '26/3', qtdCasos: pais.marco.d26});
    this.infoPais.push({ dia: '27/3', qtdCasos: pais.marco.d27});
    this.infoPais.push({ dia: '28/3', qtdCasos: pais.marco.d28});
    this.infoPais.push({ dia: '29/3', qtdCasos: pais.marco.d29});

    while(this.infoPais[0].qtdCasos == 0){
      this.infoPais.splice(0, 1);
    }
  }
}
