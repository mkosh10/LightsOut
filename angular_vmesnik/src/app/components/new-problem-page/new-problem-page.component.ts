import { Component } from '@angular/core';

@Component({
  selector: 'app-new-problem-page',
  templateUrl: './new-problem-page.component.html',
  styleUrls: ['./new-problem-page.component.css', '../../app.component.css'],
})
export class NewProblemPageComponent {
  newMatrix: number[][] = [];
  n: number = 3;

  ngOnInit() {
    this.generateNxNMatrix(8);
  }

  generateNxNMatrix(index: number) {
    this.n = index;
    this.newMatrix = [];
    for (let i = 0; i < index; i++) {
      this.newMatrix[i] = [];
      for (let j = 0; j < index; j++) {
        this.newMatrix[i][j] = 0;
      }
    }
  }
}
