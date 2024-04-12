package com.example.baitaplon.Request;

import com.example.baitaplon.Role.Role;

public record RegisterRequest (
        String email,
        String password,
        String name,
        Role role,
        String phoneNumber
){
}
