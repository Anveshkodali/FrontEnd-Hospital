import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityofdoctorcalenderComponent } from './availabilityofdoctorcalender.component';

describe('AvailabilityofdoctorcalenderComponent', () => {
  let component: AvailabilityofdoctorcalenderComponent;
  let fixture: ComponentFixture<AvailabilityofdoctorcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityofdoctorcalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityofdoctorcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
