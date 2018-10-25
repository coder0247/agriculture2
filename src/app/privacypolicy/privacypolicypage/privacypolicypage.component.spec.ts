import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicypageComponent } from './privacypolicypage.component';

describe('PrivacypolicypageComponent', () => {
  let component: PrivacypolicypageComponent;
  let fixture: ComponentFixture<PrivacypolicypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacypolicypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolicypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
