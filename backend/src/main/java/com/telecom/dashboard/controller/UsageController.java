package com.telecom.dashboard.controller;

import com.telecom.dashboard.entity.Usage;
import com.telecom.dashboard.service.UsageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usage")
@CrossOrigin("*")
public class UsageController {

    @Autowired
    private UsageService service;

    @GetMapping
    public List<Usage> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Usage save(@RequestBody Usage usage) {
        return service.save(usage);
    }
}