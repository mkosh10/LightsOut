import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemNxnComponent } from './problem-nxn.component';

describe('ProblemNxnComponent', () => {
  let component: ProblemNxnComponent;
  let fixture: ComponentFixture<ProblemNxnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemNxnComponent]
    });
    fixture = TestBed.createComponent(ProblemNxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
