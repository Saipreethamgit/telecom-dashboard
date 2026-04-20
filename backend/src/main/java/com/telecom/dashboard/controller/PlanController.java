package com.telecom.dashboard.controller;

import com.telecom.dashboard.entity.Plan;
import com.telecom.dashboard.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
@CrossOrigin("*")
public class PlanController {

    @Autowired
    private PlanRepository repo;

    @GetMapping
    public List<Plan> getAllPlans() {
        return repo.findAll();
    }

    @PostMapping
    public Plan createPlan(@RequestBody Plan plan) {
        return repo.save(plan);
    }
}