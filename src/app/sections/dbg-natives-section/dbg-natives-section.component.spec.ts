import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgNativesSectionComponent } from './dbg-natives-section.component';

describe('DbgNativesSectionComponent', () => {
  let component: DbgNativesSectionComponent;
  let fixture: ComponentFixture<DbgNativesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgNativesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgNativesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
