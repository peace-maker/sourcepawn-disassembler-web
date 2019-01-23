import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHeaderComponent } from './file-header.component';

describe('FileHeaderComponent', () => {
  let component: FileHeaderComponent;
  let fixture: ComponentFixture<FileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
