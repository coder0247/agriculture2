import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductfrmComponent } from './editproductfrm.component';

describe('EditproductfrmComponent', () => {
  let component: EditproductfrmComponent;
  let fixture: ComponentFixture<EditproductfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproductfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
