package com.telecom.dashboard.service;

import com.telecom.dashboard.entity.Customer;
import com.telecom.dashboard.entity.Plan;
import com.telecom.dashboard.repository.CustomerRepository;
import com.telecom.dashboard.repository.PlanRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repo;

    @Autowired
    private PlanRepository planRepository;

    public List<Customer> getAllCustomers() {
        return repo.findAll();
    }

    public Customer saveCustomer(Customer customer) {

        if (customer.getPlan() != null) {
            Plan plan = planRepository.findById(customer.getPlan().getId())
                    .orElse(null);
            customer.setPlan(plan);
        }

        return repo.save(customer);
    }
}