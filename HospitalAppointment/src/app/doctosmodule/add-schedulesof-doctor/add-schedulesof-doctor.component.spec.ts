import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchedulesofDoctorComponent } from './add-schedulesof-doctor.component';

describe('AddSchedulesofDoctorComponent', () => {
  let component: AddSchedulesofDoctorComponent;
  let fixture: ComponentFixture<AddSchedulesofDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSchedulesofDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSchedulesofDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
