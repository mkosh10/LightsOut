package com.lightsoutDemoM;

import jakarta.persistence.*;

@Entity(name = "solution")
public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int solution_id;

    @OneToOne
    @JoinColumn(name = "problem_id")
    private Problem problemObject;


    @Column(name = "solution_list")
    private int[] solutionList;

    public int getSolution_id() {
        return solution_id;
    }
    public int[] getSolutionList() {
        return solutionList;
    }

    public void setSolutionList(int[] solutionList) {
        this.solutionList = solutionList;
    }


    public Problem getProblemObject() {
        return problemObject;
    }
    public void setProblemObject(Problem problemObject) {
        this.problemObject = problemObject;
    }
}
