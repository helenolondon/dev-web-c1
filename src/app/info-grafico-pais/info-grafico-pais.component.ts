import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-grafico-pais',
  templateUrl: './info-grafico-pais.component.html',
  styleUrls: ['./info-grafico-pais.component.scss']
})
export class InfoGraficoPaisComponent implements OnInit {

  titulo: string = "Gráfico do Corona Vírus";
  constructor() { }

  ngOnInit() {
  }

}
