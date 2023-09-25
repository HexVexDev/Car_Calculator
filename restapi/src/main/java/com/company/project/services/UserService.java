package com.company.project.services;
import com.company.project.entities.User;
import com.company.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;
    @Autowired
    PasswordEncoder passencode;


    public void saveUser(User user) {
        // Hash the user's password before saving it to the database
        String hashedPassword = passencode.encode(user.getPassword());
        user.setPassword(hashedPassword);

        userRepo.save(user);
    }
}
