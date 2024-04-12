package com.example.baitaplon.Request;

import com.example.baitaplon.Models.Product;
import lombok.Data;

@Data
public class CartRequest {
    private String product_id;
    private int quantity;
}
