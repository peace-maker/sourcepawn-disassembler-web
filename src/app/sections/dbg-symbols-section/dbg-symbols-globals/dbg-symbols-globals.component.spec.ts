import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgSymbolsGlobalsComponent } from './dbg-symbols-globals.component';

describe('DbgSymbolsGlobalsComponent', () => {
  let component: DbgSymbolsGlobalsComponent;
  let fixture: ComponentFixture<DbgSymbolsGlobalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgSymbolsGlobalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgSymbolsGlobalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
