import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemyaccountComponent } from './deletemyaccount.component';

describe('DeletemyaccountComponent', () => {
  let component: DeletemyaccountComponent;
  let fixture: ComponentFixture<DeletemyaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemyaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
