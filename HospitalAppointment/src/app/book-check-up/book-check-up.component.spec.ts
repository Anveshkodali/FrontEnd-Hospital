import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCheckUpComponent } from './book-check-up.component';

describe('BookCheckUpComponent', () => {
  let component: BookCheckUpComponent;
  let fixture: ComponentFixture<BookCheckUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookCheckUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
