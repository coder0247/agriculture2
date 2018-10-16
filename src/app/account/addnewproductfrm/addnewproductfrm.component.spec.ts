import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewproductfrmComponent } from './addnewproductfrm.component';

describe('FormnameComponent', () => {
  let component: AddnewproductfrmComponent;
  let fixture: ComponentFixture<AddnewproductfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewproductfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewproductfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
