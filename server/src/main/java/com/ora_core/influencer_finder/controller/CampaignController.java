package com.ora_core.influencer_finder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ora_core.influencer_finder.domain.Campaigns;
import com.ora_core.influencer_finder.service.CampaignService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/campaign")
public class CampaignController {
    
    @Autowired
    private CampaignService campaignService;

    @PostMapping("/create")
    public ResponseEntity<Campaigns> postCampaign(@RequestBody Campaigns campaign) {
        try {
            Campaigns savedCampaign = campaignService.save(campaign);
            return new ResponseEntity<Campaigns>(savedCampaign, null, 201);
        } catch (Exception e) {
            return new ResponseEntity<>(null, null, 400);
        }
    }
    
    @GetMapping("/get-all")
    public ResponseEntity<List<Campaigns>> getCampaigns() {
        return new ResponseEntity<>(campaignService.getAllCampaigns(), null, 200);
    }

}
