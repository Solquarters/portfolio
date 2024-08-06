import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPortfolioComponent } from './d-portfolio.component';

describe('DPortfolioComponent', () => {
  let component: DPortfolioComponent;
  let fixture: ComponentFixture<DPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
