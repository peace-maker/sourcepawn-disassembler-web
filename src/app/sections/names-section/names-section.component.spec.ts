import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesSectionComponent } from './names-section.component';

describe('NamesSectionComponent', () => {
  let component: NamesSectionComponent;
  let fixture: ComponentFixture<NamesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
