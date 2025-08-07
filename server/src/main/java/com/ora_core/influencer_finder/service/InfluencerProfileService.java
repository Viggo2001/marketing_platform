package com.ora_core.influencer_finder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ora_core.influencer_finder.domain.InfluencerProfile;
import com.ora_core.influencer_finder.factory.InfluencerProfileFactory;
import com.ora_core.influencer_finder.repository.InfluencerProfileRepository;

@Service
public class InfluencerProfileService implements IInfluencerProfileService {

    @Autowired
    private InfluencerProfileRepository influencerProfileRepository;

    @Override
    public InfluencerProfile save(InfluencerProfile input) {
        InfluencerProfile influencerProfile = null;

        try {
            influencerProfile = InfluencerProfileFactory.createInfluencerProfile(
                input.getUser(),
                input.getName(), 
                input.getBio(), 
                input.getLocation(), 
                input.getAvatarUrl(), 
                input.getTotalFollowers(),
                input.getEngagementRate(),
                input.getRating()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return influencerProfileRepository.save(influencerProfile);
    }

    @Override
    public InfluencerProfile read(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'read'");
    }

    @Override
    public InfluencerProfile update(InfluencerProfile updateValue) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public boolean delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }
    
}
