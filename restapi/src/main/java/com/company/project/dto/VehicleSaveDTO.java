package com.company.project.dto;


import com.company.project.entities.Vehicle;

import java.util.Objects;

public class VehicleSaveDTO {
    private Vehicle vehicle;
    private Integer vehicle_make;

    // No-arguments constructor
    public VehicleSaveDTO() {
    }

    // Constructor with Model parameter
    public VehicleSaveDTO(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    // Getter for 'model' field
    public Vehicle getVehicle() {
        return vehicle;
    }

    public Integer getVehicle_make() {
        return vehicle_make;
    }



    // Setter for 'model' field
    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public void setVehicle_make(Integer vehicle_make) {
        this.vehicle_make = vehicle_make;
    }

    // toString() method
    @Override
    public String toString() {
        return "VehicleSaveDTO{" +
                "vehicle=" + vehicle +
                '}';
    }

    // equals() and hashCode() methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VehicleSaveDTO that = (VehicleSaveDTO) o;
        return Objects.equals(vehicle, that.vehicle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(vehicle);
    }
}