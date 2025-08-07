package com.ora_core.influencer_finder.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;


@Data
@Builder
@Entity
@Getter
public class CampaignInfluencers {
    
    @Id
    private String campaignInfluencersId;
    @ManyToOne
    @JoinColumn(name = "infleuncer_id")
    private InfluencerProfile influencer;
    @ManyToOne
    @JoinColumn(name = "campaign_id")
    private Campaigns campaign;
    @Enumerated(EnumType.STRING)
    private InviteStatus status;
    private double agreedRates;
    @CreationTimestamp
    private LocalDateTime invitedAt;
    private LocalDateTime respondedAt;
    private LocalDateTime completedAt;

}
