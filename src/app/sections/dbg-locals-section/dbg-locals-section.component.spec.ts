import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgLocalsSectionComponent } from './dbg-locals-section.component';

describe('DbgLocalsSectionComponent', () => {
  let component: DbgLocalsSectionComponent;
  let fixture: ComponentFixture<DbgLocalsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgLocalsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgLocalsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
