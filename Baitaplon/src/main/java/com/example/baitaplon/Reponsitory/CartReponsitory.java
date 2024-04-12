package com.example.baitaplon.Reponsitory;

import com.example.baitaplon.Models.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CartReponsitory extends MongoRepository<Cart,String> {
}
