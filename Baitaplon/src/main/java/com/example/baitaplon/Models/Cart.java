package com.example.baitaplon.Models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.*;

@Data
@Document(collection = "carts")
public class Cart {
    @MongoId(FieldType.OBJECT_ID)
    private String id;
    @DBRef
    private Product product;
    private int quantity;
}
