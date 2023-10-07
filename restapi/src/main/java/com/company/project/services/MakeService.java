package com.company.project.services;

import com.company.project.entities.Make;
import com.company.project.repositories.MakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MakeService {

    @Autowired
    MakeRepository MakeRepository;

    public ArrayList<Make> getAllMakes(){
        return(ArrayList<Make>) MakeRepository.findAll();
    }

    public Make saveMake(Make make){
        return MakeRepository.save(make);
    }

   public Make getMakebyId(Integer make_id){return MakeRepository.getMakewithId(make_id);}

}