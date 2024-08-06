import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALandingpageComponent } from './a-landingpage.component';

describe('ALandingpageComponent', () => {
  let component: ALandingpageComponent;
  let fixture: ComponentFixture<ALandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ALandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
