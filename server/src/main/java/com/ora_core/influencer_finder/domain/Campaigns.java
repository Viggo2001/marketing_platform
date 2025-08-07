package com.ora_core.influencer_finder.domain;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "campaign")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Campaigns implements Serializable {
    
    @Id
    private String campaignId;
    private String name;
    private String description;
    private double budget;
    @Enumerated(EnumType.STRING)
    private CampaignStatus status;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String targetAudience;
    @Lob
    private String requirements;
    @Lob
    private String deliverables;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    @ManyToOne
    @JoinColumn(name = "brand_id")
    private BrandProfile brand;
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<CampaignInfluencers> campaignInfluencers;

}
