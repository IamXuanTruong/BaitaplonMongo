package com.example.baitaplon.Service;

import com.example.baitaplon.Models.Product;
import com.example.baitaplon.Reponsitory.CategoryReponsitory;
import com.example.baitaplon.Reponsitory.ProductReponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductReponsitory productReponsitory;
    private final CategoryReponsitory categoryReponsitory;
    @Autowired
    public ProductService (ProductReponsitory productReponsitory, CategoryReponsitory categoryReponsitory){
    this.productReponsitory = productReponsitory;
    this.categoryReponsitory = categoryReponsitory;

    }
    public List<Product> getAllProduct(){
        return productReponsitory.findAll();
    }
    public Product createProduct(Product product) {
        Product product1 = new Product();
        product1.setProduct_name(product.getProduct_name());
        product1.setCreate_date(product.getCreate_date());
        product1.setImages(product.getImages());
        product1.setPrice(product.getPrice());
        product1.setQuantity(product.getQuantity());
        product1.setDescription(product.getDescription());
        product1.setStatus(product.getStatus());
        if (product.getCategory() != null) {
            String categoryId = product.getCategory().getId();
            product1.setCategory(categoryReponsitory.findById(categoryId).orElseThrow(() -> new RuntimeException("Category not found")));
        }
        return productReponsitory.save(product1);
    }
    public Optional<Product> findById(String id){
        return productReponsitory.findById(id);
    }

}
