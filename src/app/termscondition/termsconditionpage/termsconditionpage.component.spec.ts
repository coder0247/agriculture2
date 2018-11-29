import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconditionpageComponent } from './termsconditionpage.component';

describe('TermsconditionpageComponent', () => {
  let component: TermsconditionpageComponent;
  let fixture: ComponentFixture<TermsconditionpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsconditionpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsconditionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
