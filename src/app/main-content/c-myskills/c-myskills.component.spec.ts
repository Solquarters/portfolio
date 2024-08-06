import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyskillsComponent } from './c-myskills.component';

describe('CMyskillsComponent', () => {
  let component: CMyskillsComponent;
  let fixture: ComponentFixture<CMyskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CMyskillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CMyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
