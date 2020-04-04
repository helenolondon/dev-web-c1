import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGraficoPaisComponent } from './info-grafico-pais.component';

describe('InfoGraficoPaisComponent', () => {
  let component: InfoGraficoPaisComponent;
  let fixture: ComponentFixture<InfoGraficoPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGraficoPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGraficoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
