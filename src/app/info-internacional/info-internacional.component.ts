import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/api/api-services.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-internacional',
  templateUrl: './info-internacional.component.html',
  styleUrls: ['./info-internacional.component.scss']
})
export class InfoInternacionalComponent implements OnInit {
  dadosPaises: any;

  constructor(private sercices: ApiServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((resp: {dadosPaises: any}) => {
      this.dadosPaises = resp.dadosPaises;
    });
  }
}
