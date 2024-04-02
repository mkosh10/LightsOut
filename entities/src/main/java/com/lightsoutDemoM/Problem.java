package com.lightsoutDemoM;

import jakarta.persistence.*;

@Entity (name = "problem")
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer problem_id;

    @Column(name = "problem_matrix")
    private int[] problemMatrixList;

    @Column(name = "number_nxn")
    private int numberNxN;



    public int getId() {
        return problem_id;
    }

    public int getNumberNxN() {
        return numberNxN;
    }
    public int[] getProblemMatrixList() {
        return problemMatrixList;
    }

    public void setProblemMatrixList(int[] problemMatrix) {
        this.problemMatrixList = problemMatrix;
    }

    public void setNumberNxN(int numberNxN) {
        this.numberNxN = numberNxN;
    }


}
