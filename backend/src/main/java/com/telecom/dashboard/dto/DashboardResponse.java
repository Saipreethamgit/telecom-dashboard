package com.telecom.dashboard.dto;

import lombok.Data;

@Data
public class DashboardResponse {

    private String customerName;
    private String planName;
    private double dataUsed;
    private int callsUsed;
    private int smsUsed;
    private double billAmount;
    private String billStatus;
}