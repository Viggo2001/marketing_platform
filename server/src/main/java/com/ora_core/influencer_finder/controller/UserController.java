package com.ora_core.influencer_finder.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ora_core.influencer_finder.domain.User;
import com.ora_core.influencer_finder.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/get-all")
    public ResponseEntity<List<User>> getMethodName() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @CrossOrigin
    @PostMapping("/save")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        User addedUser = userService.save(user);
        return new ResponseEntity<User>(addedUser, null, 201);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<User> putMethodName(@PathVariable String id, @RequestBody User user) {
        User updatedUser = userService.update(user);
        return new ResponseEntity<User>(updatedUser, null, 200);
    }

}
