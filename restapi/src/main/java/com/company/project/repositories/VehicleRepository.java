package com.company.project.repositories;

import com.company.project.entities.Make;
import com.company.project.entities.Vehicle;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {


    @Query("SELECT v FROM Vehicle v WHERE v.vehicleid =?1")
    Vehicle getVehicleById(Integer vehicleid);
    List<Vehicle> findByvehiclemake(Make vehicle_make);
    @Modifying
    @Query("DELETE FROM Vehicle v WHERE v.vehicleid =?1")
    void deleteVehicleById(Integer vehicleid);





}
