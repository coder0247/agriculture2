import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsofusepageComponent } from './termsofusepage.component';

describe('TermsofusepageComponent', () => {
  let component: TermsofusepageComponent;
  let fixture: ComponentFixture<TermsofusepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsofusepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsofusepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
