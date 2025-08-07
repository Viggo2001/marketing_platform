package com.ora_core.influencer_finder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ora_core.influencer_finder.domain.InfluencerProfile;
import com.ora_core.influencer_finder.service.InfluencerProfileService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/influencer-profile")
public class InfluencerProfileController {
    
    @Autowired
    private InfluencerProfileService influencerProfileService;

    @PostMapping("/create")
    public ResponseEntity<InfluencerProfile> createInfluencerProfile(@RequestBody InfluencerProfile entity) {
        InfluencerProfile influencerProfile = influencerProfileService.save(entity);
        return new ResponseEntity<>(influencerProfile, null, 201);
    }

}
