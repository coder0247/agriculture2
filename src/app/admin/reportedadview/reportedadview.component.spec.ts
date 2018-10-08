import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedadviewComponent } from './reportedadview.component';

describe('ReportedadviewComponent', () => {
  let component: ReportedadviewComponent;
  let fixture: ComponentFixture<ReportedadviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedadviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedadviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
