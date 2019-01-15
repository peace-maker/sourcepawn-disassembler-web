import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativesSectionComponent } from './natives-section.component';

describe('NativesSectionComponent', () => {
  let component: NativesSectionComponent;
  let fixture: ComponentFixture<NativesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
