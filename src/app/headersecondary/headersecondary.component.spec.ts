import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersecondaryComponent } from './headersecondary.component';

describe('HeadersecondaryComponent', () => {
  let component: HeadersecondaryComponent;
  let fixture: ComponentFixture<HeadersecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
