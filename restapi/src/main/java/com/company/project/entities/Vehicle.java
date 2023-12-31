package com.company.project.entities;

import javax.persistence.*;


@Entity
public class Vehicle {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //All field declaration for ORM
    @Id
    @Column(name = "vehicle_id")
    private int vehicleid;

    @Basic
    @Column(name = "vehicle_name")
    private String vehicle_name;


    @Basic
    @Column(name="vehicle_autonomy")
    private Integer vehicle_autonomy;

    @Basic
    @Column(name="vehicle_image")
    private String vehicle_image;


    //Foreign Key relationship declaration
    @ManyToOne(targetEntity = Make.class)
    @JoinColumn(name = "vehicle_make", referencedColumnName = "make_id")
    private Make vehiclemake;
    //Setters and getters
    public int getId(){ return vehicleid;}

    public void setId(int id){this.vehicleid = id;}

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

    public void setVehicle_make(Make vehicle_make) {
        this.vehiclemake = vehicle_make;
    }

    public Make getVehicle_make() {
        return vehiclemake;
    }

    public void setVehicle_image(String vehicle_image) {
        this.vehicle_image = vehicle_image;
    }

    public String getVehicle_image() {
        return vehicle_image;
    }
}
