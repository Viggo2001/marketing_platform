package com.ora_core.influencer_finder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ora_core.influencer_finder.domain.BrandProfile;
import com.ora_core.influencer_finder.service.BrandProfileService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/brand-profile")
public class BrandProfileController {
    
    @Autowired
    private BrandProfileService brandProfileService;
    // @Autowired
    // private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<BrandProfile> createBrandProfile(@RequestBody BrandProfile entity) {
        return new ResponseEntity<BrandProfile>(brandProfileService.save(entity), null, 201);
    }

}
