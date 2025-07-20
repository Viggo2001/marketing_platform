package com.ora_core.influencer_finder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ora_core.influencer_finder.domain.Campaigns;

@Repository
public interface ICampaignRepository extends JpaRepository<Campaigns, String> {
    
}
