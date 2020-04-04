import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInternacionalComponent } from './info-internacional.component';

describe('InfoInternacionalComponent', () => {
  let component: InfoInternacionalComponent;
  let fixture: ComponentFixture<InfoInternacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoInternacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
