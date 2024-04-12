package com.example.baitaplon.Reponse;

import com.example.baitaplon.Models.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@AllArgsConstructor
@Data
public class ProductinCartReponse {
    private String id;
    private Product product;
    private int quantity;
}
