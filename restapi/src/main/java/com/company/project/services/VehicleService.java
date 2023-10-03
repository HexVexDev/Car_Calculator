package com.company.project.services;

import com.company.project.dto.VehicleSaveDTO;
import com.company.project.entities.Make;
import com.company.project.entities.Vehicle;
import com.company.project.repositories.MakeRepository;
import com.company.project.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class VehicleService{

    @Autowired
    VehicleRepository VehicleRepository;
    @Autowired
    com.company.project.repositories.MakeRepository MakeRepository;


    public void saveVehicle(VehicleSaveDTO tempvehicle){
        var vehicle = new Vehicle();
        vehicle.setVehicle_name(tempvehicle.getVehicle_name());
        vehicle.setVehicle_autonomy(tempvehicle.getVehicle_autonomy());
        vehicle.setVehicle_image(tempvehicle.getVehicle_image());
        vehicle.setVehicle_make(MakeRepository.findBymakeid(tempvehicle.getVehicle_make()));
        VehicleRepository.save(vehicle);
    }

    public List<Vehicle> getVehicleByMakeId(Integer vehicle_make){

        return VehicleRepository.findByvehiclemake(MakeRepository.findBymakeid(vehicle_make));
    }




}
