import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwverifyComponent } from './newsletterverify.component';

describe('VerifyregistrationComponent', () => {
  let component: NwverifyComponent;
  let fixture: ComponentFixture<NwverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
