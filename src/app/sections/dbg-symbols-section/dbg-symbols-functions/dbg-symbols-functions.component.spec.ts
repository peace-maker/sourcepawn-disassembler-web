import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgSymbolsFunctionsComponent } from './dbg-symbols-functions.component';

describe('DbgSymbolsFunctionsComponent', () => {
  let component: DbgSymbolsFunctionsComponent;
  let fixture: ComponentFixture<DbgSymbolsFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgSymbolsFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgSymbolsFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
