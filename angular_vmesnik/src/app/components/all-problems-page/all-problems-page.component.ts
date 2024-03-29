import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-problems-page',
  templateUrl: './all-problems-page.component.html',
  styleUrls: ['./all-problems-page.component.css']
})
export class AllProblemsPageComponent implements OnInit {

  problemMatrix: number[][] = [[]]
  problemSolution: number[][] = [[]]
  problemSolution2: number[][] = [[]]
  allSolutionsList: number[][][] = [[[]]]
  allProblemsList: number[][][] = [[[]]]

  constructor() {

  }


  ngOnInit() {

    //
    // this.matrix = [
    //   [1, 0, 0],
    //   [1, 0, 0],
    //   [1, 0, 0]
    // ];
    //
    // this.matrix = [
    //   [1, 0, 0, 0],
    //   [1, 0, 0, 0],
    //   [1, 0, 0, 0],
    //   [1, 0, 0, 0]
    // ];

    this.problemSolution = [
      [1, 2],
      [1, 0],
      [1, 2],
      [2, 1],
      [0, 0]
    ]
    this.problemSolution2 = [
      [1, 2],
      [1, 0],
      [2, 2],
      [2, 0],
      [0, 1]
    ]

    this.problemMatrix = [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ];

    this.allProblemsList = [
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix,
      this.problemMatrix
    ]

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
    ]

    // this.matrix = [
    //   [1, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0]
    // ];

    // this.matrix = [
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 1, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0]
    // ];
    //
    // this.matrix = [
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 1, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0]
    // ];
    //
    // this.problemMatrix = [
    //   [1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 1, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0]
    // ];
  }

  getSolutionForProblem(problem: number) {

  }


}
