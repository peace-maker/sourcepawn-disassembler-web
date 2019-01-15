import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicsSectionComponent } from './publics-section.component';

describe('PublicsSectionComponent', () => {
  let component: PublicsSectionComponent;
  let fixture: ComponentFixture<PublicsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
