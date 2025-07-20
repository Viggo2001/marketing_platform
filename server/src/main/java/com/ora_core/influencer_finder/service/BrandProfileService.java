package com.ora_core.influencer_finder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ora_core.influencer_finder.domain.BrandProfile;
import com.ora_core.influencer_finder.factory.BrandProfileFactory;
import com.ora_core.influencer_finder.repository.IBrandProfileRepository;

@Service
public class BrandProfileService implements IBrandProfileService {

    @Autowired
    private IBrandProfileRepository brandProfileRepository;

    @Override
    public BrandProfile save(BrandProfile input) {

        BrandProfile brandProfile = BrandProfileFactory.createBrandProfile(
            input.getUser(), 
            input.getCompanyName(), 
            input.getContactName(), 
            input.getIndustry(),
            input.getWebsite(),
            input.getDescription(),
            input.getLocation(),
            input.getLogoUrl(),
            input.getSocialLinks());

        return brandProfileRepository.save(brandProfile);
    }

    @Override
    public BrandProfile read(String id) {
        return brandProfileRepository.findById(id).orElse(null);
    }

    @Override
    public BrandProfile update(BrandProfile updateValue) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public boolean delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public List<BrandProfile> getAllBrands() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllBrands'");
    }
    
}
