import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSobreCoronaComponent } from './info-sobre-corona.component';

describe('InfoSobreCoronaComponent', () => {
  let component: InfoSobreCoronaComponent;
  let fixture: ComponentFixture<InfoSobreCoronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSobreCoronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSobreCoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
