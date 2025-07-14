"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Instagram,
  Youtube,
  Twitter,
  Star,
  DollarSign,
  Eye,
  Heart,
  MessageCircle,
  Users,
  Settings,
  LogOut,
  Bell,
  Plus,
  Edit,
} from "lucide-react"

export default function InfluencerDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    const type = localStorage.getItem("userType")

    if (!authStatus || type !== "influencer") {
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
      brand: "Nike",
      campaign: "Summer Collection Launch",
      status: "Active",
      budget: "$5,000",
      deadline: "2024-02-15",
      progress: 75,
    },
    {
      id: 2,
      brand: "Adidas",
      campaign: "Fitness Challenge",
      status: "Pending",
      budget: "$3,500",
      deadline: "2024-02-20",
      progress: 0,
    },
    {
      id: 3,
      brand: "Lululemon",
      campaign: "Yoga Series",
      status: "Completed",
      budget: "$4,200",
      deadline: "2024-01-30",
      progress: 100,
    },
  ]

  const mockMessages = [
    {
      id: 1,
      brand: "Nike",
      message: "Hi! We'd love to discuss a potential collaboration for our upcoming campaign.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      brand: "Spotify",
      message: "Thank you for the amazing content! The campaign performed excellently.",
      time: "1 day ago",
      unread: false,
    },
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <CardTitle>Emma Rodriguez</CardTitle>
                <p className="text-sm text-gray-600">@emmalifestyle</p>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2.5M</div>
                  <div className="text-sm text-gray-600">Total Followers</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4 text-pink-500" />
                      <span>Instagram</span>
                    </div>
                    <span>1.8M</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Youtube className="h-4 w-4 text-red-500" />
                      <span>YouTube</span>
                    </div>
                    <span>450K</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4 text-blue-500" />
                      <span>Twitter</span>
                    </div>
                    <span>250K</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-8 w-8 text-blue-500" />
                    <div>
                      <div className="text-2xl font-bold">1.2M</div>
                      <div className="text-sm text-gray-600">Monthly Views</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-8 w-8 text-red-500" />
                    <div>
                      <div className="text-2xl font-bold">85K</div>
                      <div className="text-sm text-gray-600">Avg Engagement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-8 w-8 text-green-500" />
                    <div>
                      <div className="text-2xl font-bold">$12K</div>
                      <div className="text-sm text-gray-600">This Month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-8 w-8 text-purple-500" />
                    <div>
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-sm text-gray-600">Active Campaigns</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Tabs */}
            <Tabs defaultValue="campaigns" className="space-y-6">
              <TabsList>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>

              <TabsContent value="campaigns" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Campaigns</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Campaign
                  </Button>
                </div>

                <div className="space-y-4">
                  {mockCampaigns.map((campaign) => (
                    <Card key={campaign.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{campaign.campaign}</h3>
                            <p className="text-gray-600">{campaign.brand}</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Budget</div>
                            <div className="font-semibold">{campaign.budget}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Deadline</div>
                            <div className="font-semibold">{campaign.deadline}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Progress</div>
                            <div className="font-semibold">{campaign.progress}%</div>
                          </div>
                        </div>
                        <Progress value={campaign.progress} className="mb-4" />
                        <div className="flex space-x-2">
                          <Button size="sm">View Details</Button>
                          <Button size="sm" variant="outline">
                            Message Brand
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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

                <div className="space-y-4">
                  {mockMessages.map((message) => (
                    <Card key={message.id} className={message.unread ? "border-purple-200 bg-purple-50" : ""}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">{message.brand}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">{message.time}</span>
                            {message.unread && <div className="w-2 h-2 bg-purple-600 rounded-full"></div>}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{message.message}</p>
                        <Button size="sm">Reply</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl font-bold">Analytics Overview</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Engagement Rate Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Instagram</span>
                            <span>4.8%</span>
                          </div>
                          <Progress value={48} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>YouTube</span>
                            <span>6.2%</span>
                          </div>
                          <Progress value={62} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Twitter</span>
                            <span>3.1%</span>
                          </div>
                          <Progress value={31} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Audience Demographics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
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
                            <span>Age 35+</span>
                            <span>20%</span>
                          </div>
                          <Progress value={20} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Content Library</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Content
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item}>
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gray-200 rounded-lg mb-4">
                          <img
                            src={`/placeholder.svg?height=200&width=200`}
                            alt="Content"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">Instagram</Badge>
                            <span className="text-sm text-gray-500">Jan 15</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>12.5K</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>234</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
