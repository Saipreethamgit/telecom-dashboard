package com.telecom.dashboard.controller;

import com.telecom.dashboard.dto.LoginResponse;
import com.telecom.dashboard.entity.Customer;
import com.telecom.dashboard.repository.CustomerRepository;
import com.telecom.dashboard.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/login")
    public LoginResponse login(@RequestBody Customer loginRequest) {

        // 1. Find user by email
        Customer customer = customerRepository
                .findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("DB password: '" + customer.getPassword() + "'");
        System.out.println("Entered password: '" + loginRequest.getPassword() + "'");

        // 2. Check password
        if (customer.getPassword() == null ||
                !customer.getPassword().trim().equals(loginRequest.getPassword().trim())) {

            throw new RuntimeException("Invalid password");
        }

        // 3. Generate token
        String token = jwtUtil.generateToken(customer.getEmail());

        // 4. Return logged-in user info
        return new LoginResponse(
                token,
                customer.getId(),
                customer.getEmail()
        );
    }
}