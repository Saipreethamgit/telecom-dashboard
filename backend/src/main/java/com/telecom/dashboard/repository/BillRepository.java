package com.telecom.dashboard.repository;

import com.telecom.dashboard.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Long> {
}