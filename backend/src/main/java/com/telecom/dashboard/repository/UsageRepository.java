package com.telecom.dashboard.repository;

import com.telecom.dashboard.entity.Usage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsageRepository extends JpaRepository<Usage, Long> {
}