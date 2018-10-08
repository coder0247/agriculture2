import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeonsaleComponent } from './makeonsale.component';

describe('MakeonsaleComponent', () => {
  let component: MakeonsaleComponent;
  let fixture: ComponentFixture<MakeonsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeonsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeonsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
