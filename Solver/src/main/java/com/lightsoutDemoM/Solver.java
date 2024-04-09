package com.lightsoutDemoM;

import java.util.*;
import java.util.*;

public class Solver {
    // To test the solver, insert your nxn problem into the b table, which represents an nxn list.

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Solver ge = new Solver();

        System.out.println("\nEnter the size of the NxN lights out game: ");
        // int N = sc.nextInt();


        int[] b = {0, 0, 1,
                1, 1, 0,
                0, 1, 1};

        int N = (int) Math.sqrt(b.length);
        System.out.println(N);

        // List containing object matrices representing each lights out rule
        ArrayList<MatrixNxN> matrixObjectsList = new ArrayList<>();

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                MatrixNxN miniMatrica = new MatrixNxN(N);
                miniMatrica.setIndex(i, j);
                matrixObjectsList.add(miniMatrica);
            }
        }

        // Matrix A representing the coefficient matrix for the system Ax = b
        // This matrix will be used in Gaussian Elimination to solve the system of
        // linear equations
        int[][] A = new int[N * N][N * N];
        A = setGausMatrix(matrixObjectsList, N);

        // 'b' vector representing the problem defined by the user for an NxN lights out
        // game
        ge.solve(A, b);
    }

    public static int[][] setGausMatrix(ArrayList<MatrixNxN> matrixList, int N) {
        int A[][] = new int[N * N][N * N];
        int indI = 0;
        int indJ = 0;
        for (int matrixListInd = 0; matrixListInd < N * N; matrixListInd++) {

            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    A[indJ][indI] = matrixList.get(matrixListInd).getElementAtIndex(i, j);
                    indJ++;
                }
            }
            indJ = 0;
            indI++;
        }
        return A;
    }

    public void solve(int[][] A, int[] B) {
        int N = B.length;
        for (int k = 0; k < N; k++) {
            /** find pivot row **/
            int max = k;
            for (int i = k + 1; i < N; i++)
                if (Math.abs(A[i][k]) > Math.abs(A[max][k]))
                    max = i;

            // swap row in A matrix
            int[] temp = A[k];
            A[k] = A[max];
            A[max] = temp;

            // swap corresponding values in constants matrix
            int t = B[k];
            B[k] = B[max];
            B[max] = t;

            // pivot within A and B
            for (int i = k + 1; i < N; i++) {
                int factor = A[i][k];
                B[i] = (int) (Math.abs(B[i] - factor * B[k] % 2));
                for (int j = k; j < N; j++)
                    A[i][j] = (int) (Math.abs(A[i][j] - factor * A[k][j]) % 2);
            }
        }

        // printRowEchelonForm(A, B);
        for (int i = 0; i < N; i++) {
            boolean rowIsOk = false;
            for (int j = 0; j < N; j++) {
                if (A[i][j] == 1) {
                    rowIsOk = true;
                    break;
                }
            }
            if (!rowIsOk && B[i] != 0) {
                System.out.println("Solution not found");
                return;
            }
        }

        // back substitution
        int[] solution = new int[N];
        for (int i = N - 1; i >= 0; i--) {
            int sum = 0;
            for (int j = i + 1; j < N; j++)
                sum = (sum + A[i][j] * solution[j]) % 2;
            solution[i] = (B[i] - sum) % 2;
            if (solution[i] < 0) {
                solution[i] += 2;
            }
        }

        printSolution(solution);
    }

    // function to print in row echleon form
    public void printRowEchelonForm(int[][] A, int[] B) {
        int N = B.length;
        System.out.println("\nRow Echelon form : ");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++)
                System.out.printf("%d", A[i][j]);
            System.out.printf("| %d\n", B[i]);
        }
        System.out.println();
    }

    // function to print solution and coordinates
    public void printSolution(int[] sol) {
        int solutionSize = sol.length;
        int size = (int) Math.sqrt(solutionSize);
        int coordI = 0;
        int coordJ = 0;

        System.out.println("\nClick on the lights that are set to 1 to solve your Lights Out game:");

        for (int i = 0; i < sol.length; i++) {
            System.out.printf("%d ", sol[i]);
            if ((i + 1) % size == 0) {
                System.out.println();
            }
        }
        System.out.println();

        System.out.println("\nOr here are the solution coordinates:");
        for (int i = 0; i < sol.length; i++) {
            if (sol[i] == 1) {
                System.out.printf("[%d, %d],\n", coordI, coordJ);
            }

            coordJ++;
            if ((i + 1) % size == 0) {
                coordJ = 0;
                coordI++;
            }
        }
    }

}

class MatrixNxN {
    private int[][] matrix;

    MatrixNxN(int n) {
        this.matrix = new int[n][n];
    }

    public void setIndex(int i, int j) {

        this.matrix[i][j] = 1;

        if (i - 1 >= 0) {
            this.matrix[i - 1][j] = 1;
        }

        if (i + 1 < this.matrix.length) {
            this.matrix[i + 1][j] = 1;
        }

        if (j - 1 >= 0) {
            this.matrix[i][j - 1] = 1;
        }

        if (j + 1 < this.matrix.length) {
            this.matrix[i][j + 1] = 1;
        }
    }

    public int getElementAtIndex(int i, int j) {
        return this.matrix[i][j];
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (int[] row : matrix) {
            for (int num : row) {
                sb.append(num).append(" ");
            }
            sb.append("\n");
        }
        return sb.toString();
    }
}
