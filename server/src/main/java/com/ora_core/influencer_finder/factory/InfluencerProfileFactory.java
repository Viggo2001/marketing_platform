package com.ora_core.influencer_finder.factory;

import com.ora_core.influencer_finder.domain.InfluencerProfile;
import com.ora_core.influencer_finder.domain.User;

public class InfluencerProfileFactory {
    
    public static InfluencerProfile createInfluencerProfile(
        User user, 
        String name,
        String bio,
        String location,
        String avatarUrl,
        int totalFollowers,
        float engagementRate,
        double rating
    ) {
        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }

        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty");
        }

        if (bio == null || bio.isEmpty()) {
            throw new IllegalArgumentException("Bio cannot be null or empty");
        }

        return InfluencerProfile.builder()
                .user(user)
                .name(name)
                .bio(bio)
                .location(location)
                .avatarUrl(avatarUrl)
                .totalFollowers(totalFollowers)
                .engagementRate(engagementRate)
                .rating(rating)
                .build();
    }

}
