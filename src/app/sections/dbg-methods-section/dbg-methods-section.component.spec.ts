import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgMethodsSectionComponent } from './dbg-methods-section.component';

describe('DbgMethodsSectionComponent', () => {
  let component: DbgMethodsSectionComponent;
  let fixture: ComponentFixture<DbgMethodsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgMethodsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgMethodsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
