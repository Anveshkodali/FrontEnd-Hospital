import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorhomeheaderComponent } from './doctorhomeheader.component';

describe('DoctorhomeheaderComponent', () => {
  let component: DoctorhomeheaderComponent;
  let fixture: ComponentFixture<DoctorhomeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorhomeheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorhomeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
