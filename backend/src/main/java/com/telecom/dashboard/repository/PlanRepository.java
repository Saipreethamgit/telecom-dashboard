package com.telecom.dashboard.repository;

import com.telecom.dashboard.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long> {
}