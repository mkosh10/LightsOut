import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-problems-page',
  templateUrl: './all-problems-page.component.html',
  styleUrls: ['./all-problems-page.component.css', '../../app.component.css'],
})
export class AllProblemsPageComponent implements OnInit {
  problemMatrix: number[][] = [[]];
  problemMatrix2: number[][] = [[]];
  problemMatrix3: number[][] = [[]];
  problemSolution: number[][] = [[]];
  problemSolution2: number[][] = [[]];
  allSolutionsList: number[][][] = [[[]]];
  allProblemsList: number[][][] = [[[]]];

  constructor() {}

  ngOnInit() {
    this.problemSolution = [
      [1, 2],
      [1, 0],
      [1, 2],
      [2, 1],
      [0, 0],
    ];
    this.problemSolution2 = [
      [1, 2],
      [1, 0],
      [2, 2],
      [2, 0],
      [0, 1],
    ];

    this.problemMatrix = [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
    ];

    this.problemMatrix3 = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ];

    this.problemMatrix2 = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.allProblemsList = [
      this.problemMatrix3,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix2,
      this.problemMatrix,
      this.problemMatrix2,
      this.problemMatrix,
      this.problemMatrix,
    ];

    this.allProblemsList.sort((a, b) => a.length - b.length);

    this.allSolutionsList = [
      this.problemSolution,
      this.problemSolution2,
      this.problemSolution,
      this.problemSolution2,
      this.problemSolution,
      this.problemSolution2,
      this.problemSolution,
      this.problemSolution,
      this.problemSolution,
      this.problemSolution,
    ];
  }
}
