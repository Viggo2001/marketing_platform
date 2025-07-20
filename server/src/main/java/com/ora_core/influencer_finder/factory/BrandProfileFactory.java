package com.ora_core.influencer_finder.factory;

import java.time.LocalDateTime;
import java.util.UUID;

import com.ora_core.influencer_finder.domain.BrandProfile;
import com.ora_core.influencer_finder.domain.User;

public class BrandProfileFactory {

    public static BrandProfile createBrandProfile(
        User user,
        String companyName,
        String contactName,
        String industry,
        String website,
        String description,
        String location,
        String logoUrl,
        String socialLinks
    ) {
        String brandId = UUID.randomUUID().toString();

        if (user == null)
            throw new IllegalArgumentException("User cannot be null");

        if (companyName == null || companyName.isEmpty())
            throw new IllegalArgumentException("Company name cannot be null or empty");

        return BrandProfile.builder()
            .brandId(brandId)
            .user(user)
            .companyName(companyName)
            .contactName(contactName)
            .industry(industry)
            .website(website)
            .description(description)
            .location(location)
            .logoUrl(logoUrl)
            .socialLinks(socialLinks)
            .createdAt(LocalDateTime.now())
            .updatedAt(LocalDateTime.now())
            .build();
    }

}
