package com.example.baitaplon.Controller;

import com.example.baitaplon.Models.User;
import com.example.baitaplon.Request.LoginRequest;
import com.example.baitaplon.Request.RegisterRequest;
import com.example.baitaplon.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    public final UserService userService;
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody RegisterRequest registerRequest) {
        User user = userService.register(registerRequest);
        return ResponseEntity.ok(user);
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.login(loginRequest)
                .map(user -> ResponseEntity.ok().body("Đăng nhập thành công!"))
                .orElseGet(() -> ResponseEntity.badRequest().body("Thông tin đăng nhập không chính xác!"));
    }

}
