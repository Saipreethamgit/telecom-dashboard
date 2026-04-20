package com.telecom.dashboard.controller;

import com.telecom.dashboard.entity.Bill;
import com.telecom.dashboard.service.BillService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin("*")
public class BillController {

    @Autowired
    private BillService service;

    @GetMapping
    public List<Bill> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Bill save(@RequestBody Bill bill) {
        return service.save(bill);
    }
}