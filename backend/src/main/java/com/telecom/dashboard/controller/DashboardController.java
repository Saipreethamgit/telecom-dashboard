package com.telecom.dashboard.controller;

import com.telecom.dashboard.dto.DashboardResponse;
import com.telecom.dashboard.service.DashboardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

    @Autowired
    private DashboardService service;

    @GetMapping("/{customerId}")
    public DashboardResponse getDashboard(@PathVariable Long customerId) {
        return service.getDashboard(customerId);
    }
}