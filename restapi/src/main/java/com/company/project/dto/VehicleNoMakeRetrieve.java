package com.company.project.dto;

public class VehicleNoMakeRetrieve {
    private Integer vehicleid;
    private String vehicle_name;
    private Integer vehicle_autonomy;
    private String vehicle_image;
    // getters and setters


    public void setVehicleid(Integer vehicleid) {
        this.vehicleid = vehicleid;
    }

    public Integer getVehicleid() {
        return vehicleid;
    }

    public void setVehicle_autonomy(Integer vehicleAutonomy) {
        this.vehicle_autonomy = vehicleAutonomy;
    }

    public Integer getVehicle_autonomy() {
        return vehicle_autonomy;
    }

    public void setVehicle_image(String vehicleImage) {
        this.vehicle_image = vehicleImage;
    }

    public String getVehicle_image() {
        return vehicle_image;
    }

    public void setVehicle_name(String vehicleName) {
        this.vehicle_name = vehicleName;
    }

    public String getVehicle_name() {
        return vehicle_name;
    }
}