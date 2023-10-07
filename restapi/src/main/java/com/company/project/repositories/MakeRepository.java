package com.company.project.repositories;

import com.company.project.entities.Make;
import com.company.project.entities.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MakeRepository extends JpaRepository<Make, Integer> {
    //Retrieve Make by Id(All data)

    @Query("SELECT m FROM Make m WHERE m.makeid =?1")
    Make getMakewithId(Integer makeid);



}