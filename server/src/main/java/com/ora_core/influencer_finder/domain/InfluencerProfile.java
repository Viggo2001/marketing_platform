package com.ora_core.influencer_finder.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
@Builder
public class InfluencerProfile {
    
    @Id
    private String id;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;
    private String name;
    private String platform;
    private String platformUrl;
    private String followers;
    private String engagementRate;
    private String category;
    private String description;
    private String contactInfo;
    private String logoUrl;
    
}
