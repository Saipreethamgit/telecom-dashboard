package com.telecom.dashboard.service;

import com.telecom.dashboard.dto.DashboardResponse;
import com.telecom.dashboard.entity.*;
import com.telecom.dashboard.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private UsageRepository usageRepo;

    @Autowired
    private BillRepository billRepo;

    public DashboardResponse getDashboard(Long customerId) {

        Customer customer = customerRepo.findById(customerId).orElse(null);
        Usage usage = usageRepo.findAll().stream()
                .filter(u -> u.getCustomer().getId().equals(customerId))
                .findFirst()
                .orElse(null);

        Bill bill = billRepo.findAll().stream()
                .filter(b -> b.getCustomer().getId().equals(customerId))
                .findFirst()
                .orElse(null);

        DashboardResponse response = new DashboardResponse();

        if (customer != null) {
            response.setCustomerName(customer.getName());

            if (customer.getPlan() != null) {
                response.setPlanName(customer.getPlan().getName());
            } else {
                response.setPlanName("No Plan");
            }
        }
        if (usage != null) {
            response.setDataUsed(usage.getDataUsed());
            response.setCallsUsed(usage.getCallsUsed());
            response.setSmsUsed(usage.getSmsUsed());
        }

        if (bill != null) {
            response.setBillAmount(bill.getAmount());
            response.setBillStatus(bill.getStatus());
        }

        return response;
    }
}