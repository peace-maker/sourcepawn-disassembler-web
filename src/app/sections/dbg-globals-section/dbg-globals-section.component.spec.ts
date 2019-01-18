import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgGlobalsSectionComponent } from './dbg-globals-section.component';

describe('DbgGlobalsSectionComponent', () => {
  let component: DbgGlobalsSectionComponent;
  let fixture: ComponentFixture<DbgGlobalsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgGlobalsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgGlobalsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
