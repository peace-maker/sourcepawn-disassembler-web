import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSectionByteviewComponent } from './data-section-byteview.component';

describe('DataSectionByteviewComponent', () => {
  let component: DataSectionByteviewComponent;
  let fixture: ComponentFixture<DataSectionByteviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSectionByteviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSectionByteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
