package com.company.project.entities;

import javax.persistence.*;

@Entity
public class Make {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name="make_id")
    private int makeid;

    @Basic
    @Column(name= "make_name")
    private String make_name;

    public int getId(){ return makeid;}

    public void setId(int id){this.makeid = id;}

    public String getMake_name(){return make_name;}
    public void setMake_name (String make_name){this.make_name = make_name;}


}
