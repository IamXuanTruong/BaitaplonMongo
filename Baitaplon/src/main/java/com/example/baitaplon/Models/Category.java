package com.example.baitaplon.Models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;
@Data
@Document (collection = "categories")
public class Category {
    @MongoId(FieldType.OBJECT_ID)
    private String id;
    private String category_name;
}
