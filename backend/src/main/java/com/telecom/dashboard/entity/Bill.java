package com.telecom.dashboard.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Data
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double amount;
    private LocalDate dueDate;
    private String status;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    @JsonIgnoreProperties({"plan"})
    private Customer customer;
}