import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorhomepostloginComponent } from './doctorhomepostlogin.component';

describe('DoctorhomepostloginComponent', () => {
  let component: DoctorhomepostloginComponent;
  let fixture: ComponentFixture<DoctorhomepostloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorhomepostloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorhomepostloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
