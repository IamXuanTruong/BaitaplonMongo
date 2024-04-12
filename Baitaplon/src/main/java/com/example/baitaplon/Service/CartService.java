package com.example.baitaplon.Service;

import com.example.baitaplon.Models.Cart;
import com.example.baitaplon.Models.Product;
import com.example.baitaplon.Reponsitory.CartReponsitory;
import com.example.baitaplon.Reponsitory.ProductReponsitory; //Thêm import này
import com.example.baitaplon.Request.CartRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final CartReponsitory cartReponsitory;
    private final ProductReponsitory productReponsitory; //Thay đổi tên và type của ProductService thành ProductReponsitory
    // Thêm ProductReponsitory vào constructor và thay đổi autowired
    @Autowired
    public CartService(CartReponsitory cartReponsitory, ProductReponsitory productReponsitory) {
        this.cartReponsitory = cartReponsitory;
        this.productReponsitory = productReponsitory;
    }

    public List<Cart> getAllCart() {
        return cartReponsitory.findAll();
    }

    public void addProduct(CartRequest request) {
        Optional<Product> productOptional = productReponsitory.findById(request.getProduct_id()); //Sửa tên biến productService thành productReponsitory
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            Cart cart = new Cart();
            cart.setProduct(product);
            cart.setQuantity(request.getQuantity());
            cartReponsitory.save(cart);
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public void update(String id, int quantity) {
        Cart cart = cartReponsitory.findById(id).orElseThrow(() -> new RuntimeException("Cart not found"));
        cart.setQuantity(quantity);
        cartReponsitory.save(cart);
    }
    public void delete(String id) {
        cartReponsitory.deleteById(id);
    }
}
