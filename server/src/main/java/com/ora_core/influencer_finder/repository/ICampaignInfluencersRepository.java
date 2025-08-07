package com.ora_core.influencer_finder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ora_core.influencer_finder.domain.CampaignInfluencers;

public interface ICampaignInfluencersRepository extends JpaRepository<CampaignInfluencers, String> {
    
}
