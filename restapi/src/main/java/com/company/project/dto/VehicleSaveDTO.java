package com.company.project.dto;

import javax.persistence.*;



public class VehicleSaveDTO {

    private String vehicle_name;



    private Integer vehicle_autonomy;


    private String vehicle_image;


    //Foreign Key relationship declaration
    private Integer vehiclemake;
    //Setters and getters

    public void setVehicle_name(String vehicle_name) {
        this.vehicle_name = vehicle_name;
    }

    public String getVehicle_name() {
        return vehicle_name;
    }

    public void setVehicle_autonomy(Integer vehicle_autonomy) {
        this.vehicle_autonomy = vehicle_autonomy;
    }

    public Integer getVehicle_autonomy() {
        return vehicle_autonomy;
    }

    public void setVehicle_make(Integer vehicle_make) {
        this.vehiclemake = vehicle_make;
    }

    public Integer getVehicle_make() {
        return vehiclemake;
    }

    public void setVehicle_image(String vehicle_image) {
        this.vehicle_image = vehicle_image;
    }

    public String getVehicle_image() {
        return vehicle_image;
    }
}