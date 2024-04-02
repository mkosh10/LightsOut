package com.lightsoutDemoM;

import jakarta.persistence.*;

@Entity(name = "solution_step")
public class SolutionStep {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int solutionStep_id;


    @OneToOne
    @JoinColumn(name = "solution_id")
    private Solution solutionObj;


    @Column(name = "solution_step_list")
    private int[] solutionStepList;

    public int getSolutionStep_id() {
        return solutionStep_id;
    }
    public int[] getSolutionStepList() {
        return solutionStepList;
    }

    public void setSolutionStepList(int[] solutionStepList) {
        this.solutionStepList = solutionStepList;
    }
    public Solution getSolutionObject() {
        return solutionObj;
    }

    public void setSolutionObject(Solution solutionObj) {
        this.solutionObj = solutionObj;
    }

}
