import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgFilesSectionComponent } from './dbg-files-section.component';

describe('DbgFilesSectionComponent', () => {
  let component: DbgFilesSectionComponent;
  let fixture: ComponentFixture<DbgFilesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgFilesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgFilesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
