import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoSobreCoronaComponent } from './info-sobre-corona/info-sobre-corona.component';
import { InfoPrevencaoComponent } from './info-prevencao/info-prevencao.component';
import { InfoInternacionalComponent } from './info-internacional/info-internacional.component';
import { InfoGraficoPaisComponent } from './info-grafico-pais/info-grafico-pais.component';
import { dadosInternacionalResolver } from './resolvers/dados-internalcional.resolver';


const routes: Routes = [
  {
    path: 'info-virus',
    component: InfoSobreCoronaComponent
  },
  {
    path: 'info-prevencao',
    component: InfoPrevencaoComponent
  },
  {
    path: 'info-internacional',
    component: InfoInternacionalComponent,
    resolve: { dadosPaises: dadosInternacionalResolver }
  },
  {
    path: 'info-grafico',
    component: InfoGraficoPaisComponent
  },
  {
    path: '',
    redirectTo: 'info-virus',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
