import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSectionComponent } from './code-section.component';

describe('CodeSectionComponent', () => {
  let component: CodeSectionComponent;
  let fixture: ComponentFixture<CodeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
