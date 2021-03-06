import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ApiServicesService } from 'src/api/api-services.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-info-internacional',
  templateUrl: './info-internacional.component.html',
  styleUrls: ['./info-internacional.component.scss']
})
export class InfoInternacionalComponent implements AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  
  dadosPaises: any[];

  constructor(private sercices: ApiServicesService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.route.data.subscribe((resp: {dadosPaises: any}) => {
      this.dadosPaises = resp.dadosPaises;
      this.dataGrid.dataSource = this.dadosPaises;
      var ds = this.dataGrid.instance.getDataSource();
      if(ds){
        ds.reload();
      }
      
      this.cdr.detectChanges();

    });
  }
}
