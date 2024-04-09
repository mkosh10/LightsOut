import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-problems-page',
  templateUrl: './all-problems-page.component.html',
  styleUrls: ['./all-problems-page.component.css', '../../app.component.css'],
})
export class AllProblemsPageComponent implements OnInit {
  problemMatrix1: number[][] = [[]];
  problemMatrix2: number[][] = [[]];
  problemMatrix3: number[][] = [[]];
  problemMatrix4: number[][] = [[]]
  problemMatrix5: number[][] = [[]]
  problemMatrix6: number[][] = [[]]
  problemMatrix7: number[][] = [[]]
  problemMatrix8: number[][] = [[]]
  problemMatrix3_1: number[][] = [[]]
  problemMatrix3_2: number[][] = [[]]
  problemSolution1: number[][] = [[]];
  problemSolution2: number[][] = [[]];
  problemSolution3: number[][] = [[]];
  problemSolution4: number[][] = [[]];
  problemSolution5: number[][] = [[]];
  problemSolution6: number[][] = [[]];
  problemSolution7: number[][] = [[]];
  problemSolution8: number[][] = [[]];
  problemSolution3_1: number[][] = [[]];
  problemSolution3_2: number[][] = [[]];
  allSolutionsList: number[][][] = [[[]]];
  allProblemsList: number[][][] = [[[]]];

  constructor() {
  }
  ngOnInit() {

    //Due to the absence of an API integration,
    // the matrices presented here are hardcoded.
    // The solutions provided for each matrix are derived from a solver algorithm,
    // ensuring accurate and solvable configurations for the Lights Out game.
    this.setProblemMatrices()
    this.setProblemSolutions()
  }
  public setProblemMatrices() {
    this.problemMatrix1 = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ];
    this.problemMatrix2 = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 1]
    ];
    this.problemMatrix3_1 = [
      [1, 1, 0],
      [0, 1, 1],
      [1, 0, 0]
    ]

    this.problemMatrix3_2 = [
      [0, 0, 1],
      [1, 1, 0],
      [0, 1, 1]
    ]

    this.problemMatrix3 = [
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 1]
    ];
    this.problemMatrix4 = [
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 0]
    ];

    this.problemMatrix5 = [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ];

    this.problemMatrix6 = [
      [0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0],
      [1, 0, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 0, 0]
    ];


    this.problemMatrix7 = [
      [1, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 1]
    ];

    this.problemMatrix8 = [
      [1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 0, 0, 1, 1, 0],
      [1, 1, 0, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 0, 1, 0, 1, 1]
    ];


    this.allProblemsList = [
      this.problemMatrix1,
      this.problemMatrix2,
      this.problemMatrix3_1,
      this.problemMatrix3_2,
      this.problemMatrix3,
      this.problemMatrix4,
      this.problemMatrix5,
      this.problemMatrix6,
      this.problemMatrix7,
      this.problemMatrix8,
    ];


  }

  setProblemSolutions() {
    this.problemSolution1 = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ];
    this.problemSolution2 = [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [2, 0],
      [2, 2],
    ];
    this.problemSolution3_1 = [
      [0, 0],
      [0, 2],
      [1, 1],
      [1, 2],
      [2, 1],
    ]
    this.problemSolution3_2 = [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 0],
      [2, 2],
    ]
    this.problemSolution3 = [
      [1, 0],
      [1, 3],
      [2, 0],
      [2, 3],
    ];

    this.problemSolution4 = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 1],
      [2, 2],
    ];

    this.problemSolution5 = [
      [0, 1],
      [0, 4],
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 0],
      [2, 2],
      [2, 3],
      [3, 0],
      [3, 1],
      [3, 3],
      [3, 4],
      [4, 0],
      [4, 1],
      [4, 2],

    ];
    this.problemSolution6 = [
      [0, 3],
      [0, 4],
      [0, 5],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 2],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
      [4, 0],
      [4, 1],
      [4, 4],
      [4, 5],
      [5, 4],

    ]
    this.problemSolution7 = [
      [0, 3],
      [0, 5],
      [0, 6],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
      [2, 5],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 6],
      [4, 2],
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6],
      [5, 0],
      [5, 2],
      [5, 3],
      [5, 5],
      [5, 6],
      [6, 0],
      [6, 3],
      [6, 5],
      [6, 6],
    ]
    this.problemSolution8 = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 6],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 5],
      [1, 6],
      [1, 7],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 7],
      [3, 0],
      [3, 2],
      [3, 3],
      [3, 5],
      [3, 6],
      [4, 0],
      [4, 2],
      [4, 4],
      [4, 6],
      [5, 1],
      [5, 3],
      [6, 0],
      [6, 1],
      [6, 3],
      [6, 4],
      [7, 1],
      [7, 2],
      [7, 7],
    ];


    // this.allProblemsList.sort((a, b) => a.length - b.length);

    this.allSolutionsList = [
      this.problemSolution1,
      this.problemSolution2,
      this.problemSolution3_1,
      this.problemSolution3_2,
      this.problemSolution3,
      this.problemSolution4,
      this.problemSolution5,
      this.problemSolution6,
      this.problemSolution7,
      this.problemSolution8,

    ];

  }


}


