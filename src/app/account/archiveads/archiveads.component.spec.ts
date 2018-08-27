import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveadsComponent } from './archiveads.component';

describe('ArchiveadsComponent', () => {
  let component: ArchiveadsComponent;
  let fixture: ComponentFixture<ArchiveadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
