package com.telecom.dashboard.entity;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    @JsonIgnore
    private String password;

    private String role;

    @ManyToOne
    @JoinColumn(name = "plan_id")
    @JsonIgnoreProperties("customers")
    private Plan plan;
}