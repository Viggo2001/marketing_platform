package com.ora_core.influencer_finder.factory;

import java.time.LocalDateTime;
import java.util.UUID;

import com.ora_core.influencer_finder.domain.CampaignInfluencers;
import com.ora_core.influencer_finder.domain.Campaigns;
import com.ora_core.influencer_finder.domain.InfluencerProfile;
import com.ora_core.influencer_finder.domain.InviteStatus;

public class CampaignInfluencersFactory {

    // private String campaignInfluencersId;
    // private InfluencerProfile influencer;
    // private Campaigns campaign;
    // private InviteStatus status;
    // private double agreedRates;
    // private LocalDateTime invitedAt;
    // private LocalDateTime respondedAt;
    // private LocalDateTime completedAt;
    
    public static CampaignInfluencers creatCampaignInfluencers(
        InfluencerProfile influencer,
        Campaigns campaign,
        InviteStatus status,
        double agreedRates,
        LocalDateTime respondedAt,
        LocalDateTime completedAt
    ) {

        String id = UUID.randomUUID().toString();

        return CampaignInfluencers.builder()
            .campaignInfluencersId(id)
            .influencer(influencer)
            .campaign(campaign)
            .status(status)
            .agreedRates(agreedRates)
            .invitedAt(LocalDateTime.now())
            .respondedAt(respondedAt)
            .completedAt(completedAt)
            .build();
    }
    
}
