import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDocumentationComponent } from './medical-documentation.component';

describe('MedicalDocumentationComponent', () => {
  let component: MedicalDocumentationComponent;
  let fixture: ComponentFixture<MedicalDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
