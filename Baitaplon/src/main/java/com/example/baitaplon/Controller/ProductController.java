package com.example.baitaplon.Controller;

import com.example.baitaplon.Models.Product;
import com.example.baitaplon.Reponsitory.CategoryReponsitory;
import com.example.baitaplon.Reponsitory.ProductReponsitory;
import com.example.baitaplon.Service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final ProductReponsitory productReponsitory;
    private final ProductService productService;
    private final CategoryReponsitory categoryReponsitory;
    @GetMapping
    public ResponseEntity<List<Product>> getallProduct(){
        List<Product> products = productService.getAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createProduct(@RequestBody Product product){
        productService.createProduct(product);
        return ResponseEntity.ok().body("+1");
    }
    @GetMapping("/detail/{id}")
    public Product getProductid(@PathVariable String id){
        return productReponsitory.findById(id).orElse(null);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProductid(@PathVariable String id){
        if (productReponsitory.existsById(id)){
            productReponsitory.deleteById(id);
            return ResponseEntity.ok("ok");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("err");
        }
    }
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam("query") String query) {
        return ResponseEntity.ok(productReponsitory.searchProduct(query));
    }
}
