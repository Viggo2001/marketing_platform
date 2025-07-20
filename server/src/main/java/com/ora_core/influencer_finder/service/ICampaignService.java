package com.ora_core.influencer_finder.service;

import java.util.List;

import com.ora_core.influencer_finder.domain.Campaigns;

public interface ICampaignService extends IService<Campaigns, String> {
    
    List<Campaigns> getAllCampaigns();

}
