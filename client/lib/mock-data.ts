export interface Platform {
  name: string
  followers: string
}

export interface Influencer {
  id: string
  name: string
  username: string
  avatar: string
  bio: string
  location: string
  email: string
  totalFollowers: string
  engagementRate: number
  rating: number
  avgCostPerPost: string
  niches: string[]
  platforms: Platform[]
}

export const influencers: Influencer[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    username: "emmalifestyle",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Lifestyle and fashion influencer passionate about sustainable living and authentic style. Sharing daily inspiration and honest product reviews.",
    location: "Los Angeles, CA",
    email: "emma@emmalifestyle.com",
    totalFollowers: "2.5M",
    engagementRate: 4.8,
    rating: 4.9,
    avgCostPerPost: "5,000",
    niches: ["Fashion", "Lifestyle", "Beauty", "Sustainability"],
    platforms: [
      { name: "Instagram", followers: "1.8M" },
      { name: "YouTube", followers: "450K" },
      { name: "Twitter", followers: "250K" },
    ],
  },
  {
    id: "2",
    name: "Marcus Johnson",
    username: "fitnessmarcus",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Certified personal trainer and nutrition coach helping people transform their lives through fitness. 10+ years of experience in the industry.",
    location: "Miami, FL",
    email: "marcus@fitnessmarcus.com",
    totalFollowers: "1.8M",
    engagementRate: 6.2,
    rating: 4.8,
    avgCostPerPost: "3,500",
    niches: ["Fitness", "Health", "Nutrition", "Wellness"],
    platforms: [
      { name: "Instagram", followers: "1.2M" },
      { name: "YouTube", followers: "600K" },
    ],
  },
  {
    id: "3",
    name: "Sarah Chen",
    username: "sarahfoodie",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Food blogger and recipe developer sharing delicious, easy-to-make recipes for busy families. Author of 'Quick & Tasty Meals'.",
    location: "San Francisco, CA",
    email: "sarah@sarahfoodie.com",
    totalFollowers: "950K",
    engagementRate: 5.4,
    rating: 4.7,
    avgCostPerPost: "2,800",
    niches: ["Food", "Cooking", "Family", "Lifestyle"],
    platforms: [
      { name: "Instagram", followers: "650K" },
      { name: "YouTube", followers: "300K" },
    ],
  },
  {
    id: "4",
    name: "Alex Thompson",
    username: "techwithalex",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Tech reviewer and software engineer breaking down the latest gadgets and apps. Making technology accessible for everyone.",
    location: "Seattle, WA",
    email: "alex@techwithalex.com",
    totalFollowers: "1.3M",
    engagementRate: 7.1,
    rating: 4.6,
    avgCostPerPost: "4,200",
    niches: ["Tech", "Gaming", "Software", "Reviews"],
    platforms: [
      { name: "YouTube", followers: "800K" },
      { name: "Twitter", followers: "350K" },
      { name: "Instagram", followers: "150K" },
    ],
  },
  {
    id: "5",
    name: "Isabella Martinez",
    username: "wanderlustbella",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Travel photographer and adventure seeker documenting hidden gems around the world. Sustainable travel advocate.",
    location: "Barcelona, Spain",
    email: "bella@wanderlustbella.com",
    totalFollowers: "2.1M",
    engagementRate: 5.9,
    rating: 4.8,
    avgCostPerPost: "6,500",
    niches: ["Travel", "Photography", "Adventure", "Culture"],
    platforms: [
      { name: "Instagram", followers: "1.5M" },
      { name: "YouTube", followers: "400K" },
      { name: "Twitter", followers: "200K" },
    ],
  },
  {
    id: "6",
    name: "David Kim",
    username: "davidbusiness",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Entrepreneur and business coach helping startups scale. Founded 3 successful companies and now sharing insights with the next generation.",
    location: "New York, NY",
    email: "david@davidbusiness.com",
    totalFollowers: "750K",
    engagementRate: 4.3,
    rating: 4.5,
    avgCostPerPost: "3,000",
    niches: ["Business", "Entrepreneurship", "Finance", "Leadership"],
    platforms: [
      { name: "Twitter", followers: "400K" },
      { name: "Instagram", followers: "250K" },
      { name: "YouTube", followers: "100K" },
    ],
  },
  {
    id: "7",
    name: "Olivia Brown",
    username: "oliviabeauty",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Licensed esthetician and makeup artist sharing skincare tips and beauty tutorials. Advocate for clean beauty products.",
    location: "Austin, TX",
    email: "olivia@oliviabeauty.com",
    totalFollowers: "1.4M",
    engagementRate: 6.8,
    rating: 4.9,
    avgCostPerPost: "4,800",
    niches: ["Beauty", "Skincare", "Makeup", "Self-care"],
    platforms: [
      { name: "Instagram", followers: "900K" },
      { name: "YouTube", followers: "350K" },
      { name: "Twitter", followers: "150K" },
    ],
  },
  {
    id: "8",
    name: "Ryan Wilson",
    username: "ryangamer",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Professional gamer and content creator streaming the latest games. Esports commentator and gaming industry analyst.",
    location: "Toronto, Canada",
    email: "ryan@ryangamer.com",
    totalFollowers: "3.2M",
    engagementRate: 8.5,
    rating: 4.7,
    avgCostPerPost: "7,500",
    niches: ["Gaming", "Esports", "Tech", "Entertainment"],
    platforms: [
      { name: "YouTube", followers: "2.1M" },
      { name: "Twitter", followers: "800K" },
      { name: "Instagram", followers: "300K" },
    ],
  },
  {
    id: "9",
    name: "Sophia Davis",
    username: "sophiamom",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Mom of three sharing parenting tips, family activities, and honest motherhood moments. Pediatric nurse by profession.",
    location: "Denver, CO",
    email: "sophia@sophiamom.com",
    totalFollowers: "680K",
    engagementRate: 5.2,
    rating: 4.6,
    avgCostPerPost: "2,200",
    niches: ["Parenting", "Family", "Health", "Lifestyle"],
    platforms: [
      { name: "Instagram", followers: "450K" },
      { name: "YouTube", followers: "180K" },
      { name: "Twitter", followers: "50K" },
    ],
  },
  {
    id: "10",
    name: "James Anderson",
    username: "jamesfinance",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Financial advisor and investment strategist making personal finance accessible. Author of 'Smart Money Moves' bestseller.",
    location: "Chicago, IL",
    email: "james@jamesfinance.com",
    totalFollowers: "920K",
    engagementRate: 4.1,
    rating: 4.4,
    avgCostPerPost: "3,800",
    niches: ["Finance", "Investment", "Business", "Education"],
    platforms: [
      { name: "YouTube", followers: "500K" },
      { name: "Twitter", followers: "300K" },
      { name: "Instagram", followers: "120K" },
    ],
  },
]
