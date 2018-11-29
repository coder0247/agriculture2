import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakemostviewedComponent } from './makemostviewed.component';

describe('MakemostviewedComponent', () => {
  let component: MakemostviewedComponent;
  let fixture: ComponentFixture<MakemostviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakemostviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakemostviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
