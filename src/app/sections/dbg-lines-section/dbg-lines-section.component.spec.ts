import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgLinesSectionComponent } from './dbg-lines-section.component';

describe('DbgLinesSectionComponent', () => {
  let component: DbgLinesSectionComponent;
  let fixture: ComponentFixture<DbgLinesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgLinesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgLinesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
