import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpostloginComponent } from './headerpostlogin.component';

describe('HeaderpostloginComponent', () => {
  let component: HeaderpostloginComponent;
  let fixture: ComponentFixture<HeaderpostloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderpostloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderpostloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
