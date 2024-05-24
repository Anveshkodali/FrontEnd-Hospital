import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveorRejectAppointmentsComponent } from './approveor-reject-appointments.component';

describe('ApproveorRejectAppointmentsComponent', () => {
  let component: ApproveorRejectAppointmentsComponent;
  let fixture: ComponentFixture<ApproveorRejectAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveorRejectAppointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveorRejectAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
