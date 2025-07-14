import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  Instagram,
  Youtube,
  Twitter,
  TrendingUp,
  MapPin,
  Heart,
  MessageCircle,
  Share,
  Calendar,
  DollarSign,
  Mail,
  Phone,
} from "lucide-react"
import { influencers } from "@/lib/mock-data"

interface InfluencerProfileProps {
  params: {
    id: string
  }
}

export default function InfluencerProfile({ params }: InfluencerProfileProps) {
  const influencer = influencers.find((inf) => inf.id === params.id)

  if (!influencer) {
    notFound()
  }

  const mockPosts = [
    {
      id: 1,
      platform: "Instagram",
      image: "/placeholder.svg?height=300&width=300",
      likes: 15420,
      comments: 234,
      shares: 89,
      date: "2024-01-15",
    },
    {
      id: 2,
      platform: "Instagram",
      image: "/placeholder.svg?height=300&width=300",
      likes: 12890,
      comments: 187,
      shares: 67,
      date: "2024-01-12",
    },
    {
      id: 3,
      platform: "YouTube",
      image: "/placeholder.svg?height=300&width=300",
      likes: 8750,
      comments: 456,
      shares: 123,
      date: "2024-01-10",
    },
  ]

  const mockCampaigns = [
    {
      id: 1,
      brand: "Nike",
      campaign: "Summer Collection Launch",
      date: "2023-12-15",
      performance: "Excellent",
      reach: "2.3M",
    },
    {
      id: 2,
      brand: "Adidas",
      campaign: "Fitness Challenge",
      date: "2023-11-20",
      performance: "Very Good",
      reach: "1.8M",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">InfluencerHub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-purple-600">
                Find Influencers
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" className="mr-2 bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="h-32 w-32">
                <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                <AvatarFallback className="text-2xl">
                  {influencer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{influencer.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">@{influencer.username}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{influencer.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined 2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <Button size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 max-w-2xl">{influencer.bio}</p>

                {/* Platform Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {influencer.platforms.map((platform) => (
                    <div key={platform.name} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div>
                        {platform.name === "Instagram" && <Instagram className="h-8 w-8 text-pink-500" />}
                        {platform.name === "YouTube" && <Youtube className="h-8 w-8 text-red-500" />}
                        {platform.name === "Twitter" && <Twitter className="h-8 w-8 text-blue-500" />}
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{platform.followers}</div>
                        <div className="text-sm text-gray-600">{platform.name} followers</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{influencer.totalFollowers}</div>
                    <div className="text-sm text-gray-600">Total Followers</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{influencer.engagementRate}%</div>
                    <div className="text-sm text-gray-600">Engagement Rate</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold text-yellow-600">{influencer.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">${influencer.avgCostPerPost}</div>
                    <div className="text-sm text-gray-600">Avg Cost/Post</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Recent Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="campaigns">Past Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Niches & Expertise */}
              <Card>
                <CardHeader>
                  <CardTitle>Niches & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {influencer.niches.map((niche) => (
                      <Badge key={niche} variant="secondary">
                        {niche}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Audience Demographics */}
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Age 18-24</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Age 25-34</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Age 35-44</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{influencer.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <span>Starting at ${influencer.avgCostPerPost}/post</span>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="text-green-600 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Booking Lead Time</span>
                      <span>1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Content Delivery</span>
                      <span>3-5 business days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockPosts.map((post) => (
                    <div key={post.id} className="space-y-3">
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post content"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <Badge variant="outline">{post.platform}</Badge>
                          <span className="text-gray-500">{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Share className="h-4 w-4" />
                            <span>{post.shares}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Average Likes per Post</span>
                      <span>12,500</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Average Comments per Post</span>
                      <span>250</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Average Shares per Post</span>
                      <span>85</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Female Audience</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Male Audience</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Top Location: USA</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Previous Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCampaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{campaign.campaign}</h4>
                        <p className="text-sm text-gray-600">{campaign.brand}</p>
                        <p className="text-xs text-gray-500">{campaign.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{campaign.reach} reach</div>
                        <Badge
                          variant={campaign.performance === "Excellent" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {campaign.performance}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
