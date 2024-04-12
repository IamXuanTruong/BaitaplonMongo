package com.example.baitaplon.Models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.*;

import java.util.Date;
@Data
@Document(collection = "products")
public class Product {
    @MongoId(FieldType.OBJECT_ID)
    private String id;
    private String product_name;
    private Date create_date;
    private String images;
    private double price;
    private int quantity;
    private String description;
    private Boolean status;
    @DocumentReference
    private Category category;


}
