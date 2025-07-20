package com.ora_core.influencer_finder.domain;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "Brand_Profiles")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Data
public class BrandProfile implements Serializable {

    @Id
    private String brandId;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;
    private String companyName;
    private String contactName;
    private String industry;
    private String website;
    private String description;
    private String location;
    private String logoUrl;
    @Lob
    private String socialLinks;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    @OneToMany(mappedBy = "brand", cascade = CascadeType.ALL)
    private List<Campaigns> campaigns;
    
}
