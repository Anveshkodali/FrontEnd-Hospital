import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlogoutComponent } from './doctorlogout.component';

describe('DoctorlogoutComponent', () => {
  let component: DoctorlogoutComponent;
  let fixture: ComponentFixture<DoctorlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorlogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
