import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakebestsellerComponent } from './makebestseller.component';

describe('MakebestsellerComponent', () => {
  let component: MakebestsellerComponent;
  let fixture: ComponentFixture<MakebestsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakebestsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakebestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
