package com.ora_core.influencer_finder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ora_core.influencer_finder.domain.Campaigns;
import com.ora_core.influencer_finder.factory.CampaignsFactory;
import com.ora_core.influencer_finder.repository.ICampaignRepository;

@Service
public class CampaignService implements ICampaignService {

    @Autowired
    private ICampaignRepository campaignRepository;

    @Override
    public Campaigns save(Campaigns input) {
        try {
            Campaigns campaign = CampaignsFactory.createCampaigns(
                input.getName(), 
                input.getDescription(), 
                input.getBudget(), 
                input.getStatus(), 
                input.getStartDate(), 
                input.getEndDate(), 
                input.getTargetAudience(), 
                input.getRequirements(), 
                input.getDeliverables(),
                input.getBrand()
            );

            return campaignRepository.save(campaign);
        } catch (Exception e) {
            throw new RuntimeException("Error saving campaign: " + e.getMessage(), e);
        }
    }

    @Override
    public Campaigns read(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'read'");
    }

    @Override
    public Campaigns update(Campaigns updateValue) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public boolean delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public List<Campaigns> getAllCampaigns() {
        return campaignRepository.findAll();
    }
    
}
