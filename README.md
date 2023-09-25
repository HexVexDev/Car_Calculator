This is a personal project involving calculating the autonomy of a car upon input of data and comparing it to stored data of different car models. The aim of this work is to practice several topics, while this could have been achieved even with just JavaScript in a monolithic fashion, I view it as a way to test different approaches for achieving things and start learning how microservice design should work. 

The structure of the project is currently a container for REACT which provides the client, another REST API container based on Spring Boot so that data can be retrieved from a database(which is also a separate container), and one more for an image exclusive service. 

The idea of an image server comes from the concern that, being heavier sets of data than just JSON objects, having it separate can allow to use cloud deployment and make a scalable service that is increased on demand. The project also contains an admin panel for creating new cars, the accounts should be provided by whoever has access to the database and cant be created by any other means. Its also planned to further disgregate this admin panel from the main code as its sub optimal for it to be loaded everytime even if it will not be used, the better choice being to create an image and build the container whenever changes are required to the cars of the calculator. 

The API endpoints are selectively restricted so that only GET requests are consumable by non authenticated users. Currently the login route in REACT is not exposed as it was not intended to be visible to regular visitors. The API uses JWT for authentication. 

There is much work to be done and this is only a DRAFT of the project. It is withing my expectations to be able to deploy this project using a free tier instance someday. 
![Car calculator architecture](https://github.com/HexVexDev/Car_Calculator/assets/125330798/74bbb86d-8f65-4f62-a733-9b0ec69db27a)
