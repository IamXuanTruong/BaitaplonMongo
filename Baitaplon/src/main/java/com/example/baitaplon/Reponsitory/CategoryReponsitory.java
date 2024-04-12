package com.example.baitaplon.Reponsitory;

import com.example.baitaplon.Models.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryReponsitory extends MongoRepository<Category,String> {
}
