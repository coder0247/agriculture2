import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakenewarrivalsComponent } from './makenewarrivals.component';

describe('MakenewarrivalsComponent', () => {
  let component: MakenewarrivalsComponent;
  let fixture: ComponentFixture<MakenewarrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakenewarrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakenewarrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
