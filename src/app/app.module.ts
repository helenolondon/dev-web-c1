import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeModule } from 'devextreme-angular';
import { InfoInternacionalComponent } from './info-internacional/info-internacional.component';
import { InfoGraficoPaisComponent } from './info-grafico-pais/info-grafico-pais.component';
import { InfoSobreCoronaComponent } from './info-sobre-corona/info-sobre-corona.component';
import { InfoPrevencaoComponent } from './info-prevencao/info-prevencao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoInternacionalComponent,
    InfoGraficoPaisComponent,
    InfoSobreCoronaComponent,
    InfoPrevencaoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
