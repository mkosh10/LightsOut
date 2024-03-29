import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProblemsPageComponent } from './all-problems-page.component';

describe('AllProblemsPageComponent', () => {
  let component: AllProblemsPageComponent;
  let fixture: ComponentFixture<AllProblemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProblemsPageComponent]
    });
    fixture = TestBed.createComponent(AllProblemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
