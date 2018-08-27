import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprimaryComponent } from './headerprimary.component';

describe('HeaderprimaryComponent', () => {
  let component: HeaderprimaryComponent;
  let fixture: ComponentFixture<HeaderprimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderprimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderprimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
