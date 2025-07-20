package com.ora_core.influencer_finder.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ora_core.influencer_finder.domain.BrandProfile;

@Service
public interface IBrandProfileService extends IService<BrandProfile, String> {
    
    List<BrandProfile> getAllBrands();

}
