package com.company.project.controllers;

import com.company.project.dto.VehicleMakeRequest;
import com.company.project.dto.VehicleSaveDTO;
import com.company.project.entities.Vehicle;
import com.company.project.services.VehicleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/vehicles")
public class VehicleController {

    @Autowired
    VehicleService service;

    @GetMapping()
    public List<Vehicle> getVehicleByMakeId(@RequestBody VehicleMakeRequest request) {
        Integer vehicle_make = request.getVehicle_make();
        return this.service.getVehicleByMakeId(vehicle_make);
    }

    @PostMapping("/addvehicle")
    public Vehicle saveVehicle(@RequestBody VehicleSaveDTO vehicle){
        return this.service.saveVehicle(vehicle);
    }


}


