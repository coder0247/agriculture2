import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveadsComponent } from './activeads.component';

describe('ActiveadsComponent', () => {
  let component: ActiveadsComponent;
  let fixture: ComponentFixture<ActiveadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
