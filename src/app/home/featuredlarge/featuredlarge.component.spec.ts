import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedlargeComponent } from './featuredlarge.component';

describe('FeaturedlargeComponent', () => {
  let component: FeaturedlargeComponent;
  let fixture: ComponentFixture<FeaturedlargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedlargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedlargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
