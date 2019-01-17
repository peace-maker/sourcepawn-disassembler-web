import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgInfoSectionComponent } from './dbg-info-section.component';

describe('DbgInfoSectionComponent', () => {
  let component: DbgInfoSectionComponent;
  let fixture: ComponentFixture<DbgInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
