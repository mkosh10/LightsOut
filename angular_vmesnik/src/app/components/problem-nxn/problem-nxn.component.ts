import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-problem-nxn',
  templateUrl: './problem-nxn.component.html',
  styleUrls: ['./problem-nxn.component.css']
})
export class ProblemNxnComponent {
  @Input() matrix: number[][] = [[]]
  @Input() solutions: number[][] = [[]];
  getSolutionsBtn: Boolean = false

  constructor() {

  }

  ngOnInit() {

  }

  isValueInSolutionsArray(element: number[]): Boolean {
    for (let i = 0; i < this.solutions.length; i++) {
      if (this.solutions[i][0] === element[0] && this.solutions[i][1] === element[1]) {
        return true;
      }
    }
    return false;
  }

  getSolutionBtnIsClicked() {
    this.getSolutionsBtn = true;
    //   TODO: Reset the problem
  }

  setRepeatFunInGridTemplate() {
    return `repeat(${this.matrix.length}, 43px`;
  }

  changeColor(j: number, i: number) {
    this.matrix[i][j] = (this.matrix[i][j] + 1) % 2;

    if (i - 1 >= 0) {
      this.matrix[i - 1][j] = (this.matrix[i - 1][j] + 1) % 2;
    }

    if (i + 1 < this.matrix.length) {
      this.matrix[i + 1][j] = (this.matrix[i + 1][j] + 1) % 2;
    }

    if (j - 1 >= 0) {
      this.matrix[i][j - 1] = (this.matrix[i][j - 1] + 1) % 2;
    }

    if (j + 1 < this.matrix.length) {
      this.matrix[i][j + 1] = (this.matrix[i][j + 1] + 1) % 2;
    }
  }
}
