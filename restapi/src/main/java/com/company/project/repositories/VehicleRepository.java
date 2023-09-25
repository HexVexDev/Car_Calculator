package com.company.project.repositories;

import com.company.project.entities.Vehicle;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {


    @Query("SELECT v FROM Vehicle v WHERE v.vehicle_id =?1")
    Vehicle getVehicleById(Integer vehicleid);
    @Query("SELECT v FROM Vehicle v WHERE v.vehicle_make =?1")
    List<Vehicle> getVehiclesByMakeId(Integer vehicle_make);
    @Modifying
    @Query("DELETE FROM Vehicle v WHERE v.vehicle_id =?1")
    void deleteVehicleById(Integer vehicleid);





}
