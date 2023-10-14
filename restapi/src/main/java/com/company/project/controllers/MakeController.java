package com.company.project.controllers;

import com.company.project.entities.Make;
import com.company.project.services.MakeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/makes")
public class MakeController {

    @Autowired
    MakeService service;


    @GetMapping()
    public ArrayList<Make> getAllMakes(){
        return service.getAllMakes();
    } //Change into list //works fine

    @PostMapping("/addmake")
    public void saveMake(@RequestBody Make make){
         this.service.saveMake(make);
    } //Restrict this endpoint by adding a new path //CHECKED
}
