import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportadComponent } from './reportad.component';

describe('ReportadComponent', () => {
  let component: ReportadComponent;
  let fixture: ComponentFixture<ReportadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
