import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrevencaoComponent } from './info-prevencao.component';

describe('InfoPrevencaoComponent', () => {
  let component: InfoPrevencaoComponent;
  let fixture: ComponentFixture<InfoPrevencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPrevencaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPrevencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
