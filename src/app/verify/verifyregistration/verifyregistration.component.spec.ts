import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyregistrationComponent } from './verifyregistration.component';

describe('VerifyregistrationComponent', () => {
  let component: VerifyregistrationComponent;
  let fixture: ComponentFixture<VerifyregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
