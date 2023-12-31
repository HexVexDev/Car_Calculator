package com.company.project.security;

import com.company.project.entities.User;
import com.company.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpls implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User user=  userRepository
                .findOneByUsername(username)
                .orElseThrow(()->new UsernameNotFoundException("El Usuario con username "+ username +" no existe."));
        return new UserDetailsImpl(user);
    }
}
