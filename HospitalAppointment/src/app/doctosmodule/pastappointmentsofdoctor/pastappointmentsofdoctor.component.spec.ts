import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastappointmentsofdoctorComponent } from './pastappointmentsofdoctor.component';

describe('PastappointmentsofdoctorComponent', () => {
  let component: PastappointmentsofdoctorComponent;
  let fixture: ComponentFixture<PastappointmentsofdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastappointmentsofdoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastappointmentsofdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
