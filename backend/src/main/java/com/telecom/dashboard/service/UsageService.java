package com.telecom.dashboard.service;

import com.telecom.dashboard.entity.Usage;
import com.telecom.dashboard.entity.Customer;
import com.telecom.dashboard.repository.UsageRepository;
import com.telecom.dashboard.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsageService {

    @Autowired
    private UsageRepository repo;

    @Autowired
    private CustomerRepository customerRepository;

    public List<Usage> getAll() {
        return repo.findAll();
    }

    public Usage save(Usage usage) {

        if (usage.getCustomer() != null) {
            Customer customer = customerRepository
                    .findById(usage.getCustomer().getId())
                    .orElse(null);

            usage.setCustomer(customer);
        }

        return repo.save(usage);
    }
}