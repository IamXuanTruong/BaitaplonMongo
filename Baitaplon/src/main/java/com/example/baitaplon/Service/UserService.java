package com.example.baitaplon.Service;

import com.example.baitaplon.Models.User;
import com.example.baitaplon.Reponsitory.UserReponsitory;
import com.example.baitaplon.Request.LoginRequest;
import com.example.baitaplon.Request.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserReponsitory userReponsitory;
    @Autowired
    public UserService (UserReponsitory userReponsitory){
        this.userReponsitory = userReponsitory;
    }
    public User register(RegisterRequest registerRequest) {
        User newUser = new User(registerRequest.email(), registerRequest.password(),
                registerRequest.name(), registerRequest.phoneNumber());
        return userReponsitory.save(newUser);
    }
    public Optional<User> getUserid(String id){
        return userReponsitory.findById(id);
    }
    public void deleteUsers(String id){
        userReponsitory.deleteById(id);
    }
    public Optional<User> login(LoginRequest loginRequest) {
        return userReponsitory.findByEmail(loginRequest.getEmail())
                .filter(user -> user.getPassword().equals(loginRequest.getPassword()));
    }
}
