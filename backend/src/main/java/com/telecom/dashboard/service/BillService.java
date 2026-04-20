package com.telecom.dashboard.service;

import com.telecom.dashboard.entity.Bill;
import com.telecom.dashboard.entity.Customer;
import com.telecom.dashboard.repository.BillRepository;
import com.telecom.dashboard.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    @Autowired
    private BillRepository repo;

    @Autowired
    private CustomerRepository customerRepository;

    public List<Bill> getAll() {
        return repo.findAll();
    }

    public Bill save(Bill bill) {

        if (bill.getCustomer() != null) {
            Customer customer = customerRepository
                    .findById(bill.getCustomer().getId())
                    .orElse(null);

            bill.setCustomer(customer);
        }

        return repo.save(bill);
    }
}