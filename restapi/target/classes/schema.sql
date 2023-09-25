CREATE DATABASE IF NOT EXISTS DB;
USE DB;
create table IF NOT EXISTS make
(
    make_id   int          NOT NULL AUTO_INCREMENT primary key,
    make_name varchar(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS vehicle(
vehicle_id int NOT NULL AUTO_INCREMENT primary key,
vehicle_name varchar(128) NOT NUll,
vehicle_autonomy integer(4) NOT NULL,
vehicle_make INT NOT NULL,
FOREIGN KEY (vehicle_make) references make(make_id)
);

CREATE TABLE IF NOT EXISTS user(
    id int NOT NULL AUTO_INCREMENT primary key ,
  username varchar(20) NOT NULL,
  password varchar(10) NOT NULL
)
