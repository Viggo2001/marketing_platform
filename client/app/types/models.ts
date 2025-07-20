export interface BrandPayload {
  brandId: string;
  user: {
    userId: string;
  };
  companyName: string;
  contactName: string;
  industry: string;
  website: string;
  description: string;
  location: string;
  logoUrl: string;
  socialLinks: string; // stringified JSON like: "{\"Instagram\": \"@string\"}"
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  campaigns: any[];  // can be replaced with a Campaign[] interface later
}

export interface SocialLinks {
  Instagram?: string;
  [platform: string]: string | undefined;
}

// SocialLinks usage ==> const parsedLinks: SocialLinks = JSON.parse(brand.socialLinks);
