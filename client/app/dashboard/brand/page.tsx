"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  TrendingUp,
  Search,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Plus,
  Star,
  Instagram,
  Youtube,
  Twitter,
  Eye,
  MessageCircle,
} from "lucide-react"
import { influencers } from "@/lib/mock-data"

export default function BrandDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    const type = localStorage.getItem("userType")

    if (!authStatus || type !== "brand") {
      router.push("/auth/login")
      return
    }

    setIsAuthenticated(true)
    setUserType(type)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userType")
    router.push("/")
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  const mockCampaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      influencers: 5,
      budget: "$25,000",
      status: "Active",
      reach: "2.3M",
      engagement: "4.8%",
    },
    {
      id: 2,
      name: "Fitness Challenge",
      influencers: 3,
      budget: "$15,000",
      status: "Planning",
      reach: "1.8M",
      engagement: "5.2%",
    },
    {
      id: 3,
      name: "Holiday Promotion",
      influencers: 8,
      budget: "$40,000",
      status: "Completed",
      reach: "4.1M",
      engagement: "6.1%",
    },
  ]

  const featuredInfluencers = influencers.slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">InfluencerHub</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Nike Marketing Team!</h1>
          <p className="text-gray-600">Manage your influencer campaigns and discover new talent</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-gray-600">Active Campaigns</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">48</div>
                  <div className="text-sm text-gray-600">Collaborating Influencers</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Eye className="h-8 w-8 text-purple-500" />
                <div>
                  <div className="text-2xl font-bold">8.2M</div>
                  <div className="text-sm text-gray-600">Total Reach</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-8 w-8 text-red-500" />
                <div>
                  <div className="text-2xl font-bold">$125K</div>
                  <div className="text-sm text-gray-600">Monthly Budget</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="discover">Discover Influencers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Campaign Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>

            <div className="space-y-4">
              {mockCampaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <p className="text-gray-600">{campaign.influencers} influencers</p>
                      </div>
                      <Badge
                        variant={
                          campaign.status === "Active"
                            ? "default"
                            : campaign.status === "Completed"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Budget</div>
                        <div className="font-semibold">{campaign.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Reach</div>
                        <div className="font-semibold">{campaign.reach}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Engagement</div>
                        <div className="font-semibold">{campaign.engagement}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Influencers</div>
                        <div className="font-semibold">{campaign.influencers}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm">View Details</Button>
                      <Button size="sm" variant="outline">
                        Manage Influencers
                      </Button>
                      <Button size="sm" variant="outline">
                        View Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discover" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Discover Influencers</h2>
              <Link href="/search">
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Advanced Search
                </Button>
              </Link>
            </div>

            {/* Quick Search */}
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search influencers..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>

            {/* Recommended Influencers */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recommended for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredInfluencers.map((influencer) => (
                  <Card key={influencer.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                          <AvatarFallback>
                            {influencer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-base">{influencer.name}</CardTitle>
                          <p className="text-sm text-gray-600">@{influencer.username}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            {influencer.platforms.slice(0, 2).map((platform) => (
                              <div key={platform.name}>
                                {platform.name === "Instagram" && <Instagram className="h-3 w-3 text-pink-500" />}
                                {platform.name === "YouTube" && <Youtube className="h-3 w-3 text-red-500" />}
                                {platform.name === "Twitter" && <Twitter className="h-3 w-3 text-blue-500" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Followers</span>
                          <span className="font-semibold">{influencer.totalFollowers}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Engagement</span>
                          <span className="font-semibold">{influencer.engagementRate}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Rating</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{influencer.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Link href={`/influencer/${influencer.id}`} className="flex-1">
                          <Button size="sm" className="w-full">
                            View Profile
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Campaign Analytics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Summer Collection</span>
                      <span className="font-semibold">ROI: 340%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Fitness Challenge</span>
                      <span className="font-semibold">ROI: 280%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Holiday Promotion</span>
                      <span className="font-semibold">ROI: 420%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Instagram className="h-4 w-4 text-pink-500" />
                        <span className="text-sm">Instagram</span>
                      </div>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Youtube className="h-4 w-4 text-red-500" />
                        <span className="text-sm">YouTube</span>
                      </div>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Twitter className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Twitter</span>
                      </div>
                      <span className="font-semibold">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Messages</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Message
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {featuredInfluencers.slice(0, 4).map((influencer) => (
                      <div
                        key={influencer.id}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                          <AvatarFallback className="text-xs">
                            {influencer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{influencer.name}</div>
                          <div className="text-xs text-gray-500 truncate">@{influencer.username}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Chat with Emma Rodriguez</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Hi! I'm interested in collaborating on your upcoming campaign.</p>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-purple-600 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          Great! Let's discuss the details. What's your rate for Instagram posts?
                        </p>
                        <span className="text-xs text-purple-200">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Type your message..." className="flex-1" />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
