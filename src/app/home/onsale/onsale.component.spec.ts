import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsaleComponent } from './onsale.component';

describe('OnsaleComponent', () => {
  let component: OnsaleComponent;
  let fixture: ComponentFixture<OnsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
