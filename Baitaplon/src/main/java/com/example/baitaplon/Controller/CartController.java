package com.example.baitaplon.Controller;

import com.example.baitaplon.Models.Cart;
import com.example.baitaplon.Reponsitory.CartReponsitory;
import com.example.baitaplon.Request.CartRequest;
import com.example.baitaplon.Service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/cart")
public class CartController {
    private final CartService cartService;
    public final CartReponsitory cartReponsitory;
    @Autowired
    public CartController(CartService cartService, CartReponsitory cartReponsitory) {
        this.cartService = cartService;
        this.cartReponsitory = cartReponsitory;
    }
    @GetMapping
    public ResponseEntity<?> getAllCarts() {
        return ResponseEntity.ok(cartService.getAllCart());
    }
    @PostMapping
    public ResponseEntity<?> addCart(@RequestBody CartRequest cartRequest) {
        try {
            cartService.addProduct(cartRequest);
            return new ResponseEntity<>("Product added to cart successfully", HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCart(@PathVariable String id){
        if (cartReponsitory.existsById(id)){
            cartReponsitory.deleteById(id);
            return ResponseEntity.ok("oke");
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("err");
        }
    }
    @PutMapping("/updateCart/{id}")
    public ResponseEntity<String> updatetoCart(@PathVariable("id") String id, @RequestBody CartRequest request) {
        cartService.update(id, request.getQuantity());
        return ResponseEntity.ok().body("ok");
    }


}
