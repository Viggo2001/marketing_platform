package com.ora_core.influencer_finder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ora_core.influencer_finder.domain.CampaignInfluencers;
import com.ora_core.influencer_finder.factory.CampaignInfluencersFactory;
import com.ora_core.influencer_finder.repository.ICampaignInfluencersRepository;

@Service
public class CampaignInfluencersService implements ICampaignInfluencersService {

    @Autowired
    private ICampaignInfluencersRepository campaignInfluencersRepository;

    @Override
    public CampaignInfluencers save(CampaignInfluencers input) {
        CampaignInfluencers campaignInfluencers = CampaignInfluencersFactory.creatCampaignInfluencers(
            input.getInfluencer(), 
            input.getCampaign(), 
            input.getStatus(), 
            input.getAgreedRates(),
            input.getRespondedAt(), 
            input.getCompletedAt());

        return campaignInfluencersRepository.save(campaignInfluencers);
    }

    @Override
    public CampaignInfluencers read(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'read'");
    }

    @Override
    public CampaignInfluencers update(CampaignInfluencers updateValue) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public boolean delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public List<CampaignInfluencers> getAllCampaignInfluencers() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllCampaignInfluencers'");
    }
    
}
