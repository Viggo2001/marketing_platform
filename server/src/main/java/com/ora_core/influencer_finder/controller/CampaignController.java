package com.ora_core.influencer_finder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ora_core.influencer_finder.domain.Campaigns;
import com.ora_core.influencer_finder.domain.User;
import com.ora_core.influencer_finder.service.CampaignService;
import com.ora_core.influencer_finder.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/campaign")
public class CampaignController {
    
    @Autowired
    private CampaignService campaignService;
    @Autowired
    private UserService userService;

    // @PostMapping("/create")
    // public ResponseEntity<?> postCampaign(@Valid @RequestBody Campaigns campaign, BindingResult result) {
    //     if (result.hasErrors()) {
    //         return ResponseEntity.badRequest().body(result.getAllErrors());
    //     }

    //     try {
    //         Campaigns savedCampaign = campaignService.save(campaign);
    //         return new ResponseEntity<Campaigns>(savedCampaign, null, 201);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(e, null, 400);
    //     }
    // }

    @PostMapping("/create")
    public ResponseEntity<?> postCampaign(@RequestBody Campaigns campaign) {
        try {
            Campaigns savedCampaign = campaignService.save(campaign);
            return new ResponseEntity<Campaigns>(savedCampaign, null, 201);
        } catch (Exception e) {
            return new ResponseEntity<>(e, null, 400);
        }
    }
    
    @GetMapping("/get-all")
    public ResponseEntity<List<Campaigns>> getCampaigns() {
        return new ResponseEntity<>(campaignService.getAllCampaigns(), null, 200);
    }

    @GetMapping("/find-by/{user-id}")
    public ResponseEntity<List<Campaigns>> getAllCampaignInfluencersByUserId(@PathVariable String param) {
        User user = userService.read(param);
        return new ResponseEntity<>(campaignService.getAllCampaignInfluencersByUserId(user), null, 201);
    }   

}
