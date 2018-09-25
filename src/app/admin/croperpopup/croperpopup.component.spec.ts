import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroperpopupComponent } from './croperpopup.component';

describe('QuickviewComponent', () => {
  let component: CroperpopupComponent;
  let fixture: ComponentFixture<CroperpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroperpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroperpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
