import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problem-nxn',
  templateUrl: './problem-nxn.component.html',
  styleUrls: ['./problem-nxn.component.css', '../../app.component.css'],
})
export class ProblemNxnComponent {
  @Input() matrix: number[][] = [[]];
  @Input() solutions: number[][] = [[]];
  @Input() showGetSolutionBtn: Boolean = true;
  @Input() createNewProblem: Boolean = false; // Indicates whether this component is used in the "create new problem page", if true only one square should be colored
  getSolutionsBtn: Boolean = false;
  copyMatrix : number[][] = [[]]
  clonedMatrix: number[][] =[[]]

  constructor() {}

  ngOnInit() {
    this.clonedMatrix = JSON.parse(JSON.stringify(this.matrix));
  }



  isValueInSolutionsArray(element: number[]): Boolean {
    for (let i = 0; i < this.solutions.length; i++) {
      if (
        this.solutions[i][0] === element[0] &&
        this.solutions[i][1] === element[1]
      ) {
        return true;
      }
    }
    return false;
  }

  // If this button is clicked, display dots in the html file
  getSolutionBtnIsClicked() {
    this.getSolutionsBtn = true
    this.matrix = this.clonedMatrix
  }

  setRepeatFunInGridTemplate() {
    return `repeat(${this.matrix.length}, 43px`;
  }

  // Changes the color of the clicked square and its neighbors
  changeColor(j: number, i: number) {
    this.matrix[i][j] = (this.matrix[i][j] + 1) % 2;

    if (!this.createNewProblem) {
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
}
