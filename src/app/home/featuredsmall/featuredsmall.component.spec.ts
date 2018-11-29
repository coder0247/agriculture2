import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedsmallComponent } from './featuredsmall.component';

describe('FeaturedsmallComponent', () => {
  let component: FeaturedsmallComponent;
  let fixture: ComponentFixture<FeaturedsmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedsmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
