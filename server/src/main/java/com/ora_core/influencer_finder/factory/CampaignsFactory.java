package com.ora_core.influencer_finder.factory;

import java.time.LocalDateTime;
import java.util.UUID;

import com.ora_core.influencer_finder.domain.BrandProfile;
import com.ora_core.influencer_finder.domain.CampaignStatus;
import com.ora_core.influencer_finder.domain.Campaigns;

public class CampaignsFactory {

    public static Campaigns createCampaigns(
        String name, 
        String description, 
        double budget, 
        CampaignStatus status, 
        LocalDateTime startDate, 
        LocalDateTime endDate, 
        String targetAudience, 
        String requirements, 
        String deliverables,
        BrandProfile brand
    ) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }

        String id = UUID.randomUUID().toString();

        return Campaigns.builder()
                .campaignId(id)
                .name(name)
                .description(description)
                .budget(budget)
                .status(status)
                .startDate(startDate)
                .endDate(endDate)
                .targetAudience(targetAudience)
                .requirements(requirements)
                .deliverables(deliverables)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .brand(brand)
                .build();
    }
    
}
