package com.ora_core.influencer_finder.service;

import java.util.List;

import com.ora_core.influencer_finder.domain.CampaignInfluencers;

public interface ICampaignInfluencersService extends IService<CampaignInfluencers, String> {

    List<CampaignInfluencers> getAllCampaignInfluencers();
    
}
