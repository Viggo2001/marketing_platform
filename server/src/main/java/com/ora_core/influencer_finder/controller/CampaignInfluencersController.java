package com.ora_core.influencer_finder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ora_core.influencer_finder.domain.CampaignInfluencers;
import com.ora_core.influencer_finder.service.CampaignInfluencersService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("campaign-influencers")
public class CampaignInfluencersController {
    
    @Autowired
    private CampaignInfluencersService campaignInfluencersService;

    @PostMapping("/create")
    public ResponseEntity<CampaignInfluencers> postCampaignInfluencers(@RequestBody CampaignInfluencers entity) {
        return new ResponseEntity<>(campaignInfluencersService.save(entity), null, 201);
    }

}
