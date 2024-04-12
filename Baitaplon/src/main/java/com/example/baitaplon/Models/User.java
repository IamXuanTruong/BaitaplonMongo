package com.example.baitaplon.Models;

import com.example.baitaplon.Role.Role;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Set;

@Data
@Document(collection = "user")
public class User {
    @MongoId(FieldType.OBJECT_ID)
    private String id;
    private String email;
    private String password;
    private String name;
    private String phoneNumber;
    private Role role;
    public User() {}

    public User(String email, String password, String name, String phoneNumber) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;

    }


}
