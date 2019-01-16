import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgSymbolsDetailComponent } from './dbg-symbols-detail.component';

describe('DbgSymbolsDetailComponent', () => {
  let component: DbgSymbolsDetailComponent;
  let fixture: ComponentFixture<DbgSymbolsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgSymbolsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgSymbolsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
