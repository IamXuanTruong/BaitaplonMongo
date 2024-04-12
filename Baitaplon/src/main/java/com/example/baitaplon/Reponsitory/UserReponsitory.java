package com.example.baitaplon.Reponsitory;

import com.example.baitaplon.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserReponsitory extends MongoRepository<User,String> {
    Optional<User> findByEmail(String email);
}
