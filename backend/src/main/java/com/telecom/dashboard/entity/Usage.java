package com.telecom.dashboard.entity;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "customer_usage")   // ← Fix here
@Data
public class Usage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double dataUsed;
    private int callsUsed;
    private int smsUsed;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    @JsonIgnoreProperties({"plan"})
    private Customer customer;
}