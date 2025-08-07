package com.ora_core.influencer_finder.domain;

import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class InfluencerProfile {
    
    @Id
    private String influencerId;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;
    private String name;
    private String bio;
    private String location;
    private String avatarUrl;
    private int totalFollowers;
    private float engagementRate;
    private double rating;
    private double averageCostPerPost;
    @Lob
    private String niches;
    @CreationTimestamp
    private double createdAt;
    @UpdateTimestamp
    private double updatedAt;
    @OneToMany(mappedBy = "influencer", cascade = CascadeType.ALL)
    private List<CampaignInfluencers> campaignInfluencers;

}
