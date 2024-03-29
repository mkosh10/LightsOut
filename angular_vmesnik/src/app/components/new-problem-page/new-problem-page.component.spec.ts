import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProblemPageComponent } from './new-problem-page.component';

describe('NewProblemPageComponent', () => {
  let component: NewProblemPageComponent;
  let fixture: ComponentFixture<NewProblemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProblemPageComponent]
    });
    fixture = TestBed.createComponent(NewProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
