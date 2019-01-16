import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgSymbolsSectionComponent } from './dbg-symbols-section.component';

describe('DbgSymbolsSectionComponent', () => {
  let component: DbgSymbolsSectionComponent;
  let fixture: ComponentFixture<DbgSymbolsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgSymbolsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgSymbolsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
