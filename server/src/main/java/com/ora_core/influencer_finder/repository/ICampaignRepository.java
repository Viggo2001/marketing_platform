package com.ora_core.influencer_finder.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ora_core.influencer_finder.domain.Campaigns;
import com.ora_core.influencer_finder.domain.User;

@Repository
public interface ICampaignRepository extends JpaRepository<Campaigns, String> {
    
    List<Campaigns> findByBrand_User(User user);

}
