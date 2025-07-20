package com.ora_core.influencer_finder.dto;

public class BrandProfileDTO {
    
    private String userId;
    private String companyName;
    private String contactName;
    private String industry;
    private String website;
    private String description;
    private String location;
    private String logoUrl;
    private String socialLinks;
    
    public String getUserId() {
        return userId;
    }
    public String getCompanyName() {
        return companyName;
    }
    public String getContactName() {
        return contactName;
    }
    public String getIndustry() {
        return industry;
    }
    public String getWebsite() {
        return website;
    }
    public String getDescription() {
        return description;
    }
    public String getLocation() {
        return location;
    }
    public String getLogoUrl() {
        return logoUrl;
    }
    public String getSocialLinks() {
        return socialLinks;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    public void setContactName(String contactName) {
        this.contactName = contactName;
    }
    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public void setWebsite(String website) {
        this.website = website;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }
    public void setSocialLinks(String socialLinks) {
        this.socialLinks = socialLinks;
    }
    @Override
    public String toString() {
        return "BrandProfileDTO [userId=" + userId + ", companyName=" + companyName + ", contactName=" + contactName
                + ", industry=" + industry + ", website=" + website + ", description=" + description + ", location="
                + location + ", logoUrl=" + logoUrl + ", socialLinks=" + socialLinks + "]";
    }

}
