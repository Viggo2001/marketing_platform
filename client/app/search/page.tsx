"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, Star, Instagram, Youtube, Twitter, TrendingUp, MapPin } from "lucide-react"
import { influencers } from "@/lib/mock-data"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedNiches, setSelectedNiches] = useState<string[]>([])
  const [followerRange, setFollowerRange] = useState([0, 10000000])
  const [engagementRange, setEngagementRange] = useState([0, 20])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [sortBy, setSortBy] = useState("followers")

  const platforms = ["Instagram", "YouTube", "Twitter", "TikTok"]
  const niches = ["Fashion", "Fitness", "Food", "Travel", "Tech", "Beauty", "Gaming", "Lifestyle", "Business", "Health"]
  const locations = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Brazil", "India"]

  const filteredInfluencers = useMemo(() => {
    const filtered = influencers.filter((influencer) => {
      // Search term filter
      if (
        searchTerm &&
        !influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !influencer.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !influencer.niches.some((niche) => niche.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        return false
      }

      // Platform filter
      if (
        selectedPlatforms.length > 0 &&
        !selectedPlatforms.some((platform) => influencer.platforms.some((p) => p.name === platform))
      ) {
        return false
      }

      // Niche filter
      if (selectedNiches.length > 0 && !selectedNiches.some((niche) => influencer.niches.includes(niche))) {
        return false
      }

      // Follower range filter
      const totalFollowers = Number.parseInt(influencer.totalFollowers.replace(/[^0-9]/g, ""))
      if (totalFollowers < followerRange[0] || totalFollowers > followerRange[1]) {
        return false
      }

      // Engagement range filter
      if (influencer.engagementRate < engagementRange[0] || influencer.engagementRate > engagementRange[1]) {
        return false
      }

      // Location filter
      if (selectedLocation && influencer.location !== selectedLocation) {
        return false
      }

      return true
    })

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "followers":
          return (
            Number.parseInt(b.totalFollowers.replace(/[^0-9]/g, "")) -
            Number.parseInt(a.totalFollowers.replace(/[^0-9]/g, ""))
          )
        case "engagement":
          return b.engagementRate - a.engagementRate
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedPlatforms, selectedNiches, followerRange, engagementRange, selectedLocation, sortBy])

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setSelectedPlatforms([...selectedPlatforms, platform])
    } else {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform))
    }
  }

  const handleNicheChange = (niche: string, checked: boolean) => {
    if (checked) {
      setSelectedNiches([...selectedNiches, niche])
    } else {
      setSelectedNiches(selectedNiches.filter((n) => n !== niche))
    }
  }

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
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/search" className="text-purple-600 font-medium">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Name, username, or niche..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Platforms</label>
                  <div className="space-y-2">
                    {platforms.map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox
                          id={platform}
                          checked={selectedPlatforms.includes(platform)}
                          onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
                        />
                        <label htmlFor={platform} className="text-sm">
                          {platform}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Niches */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Niches</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {niches.map((niche) => (
                      <div key={niche} className="flex items-center space-x-2">
                        <Checkbox
                          id={niche}
                          checked={selectedNiches.includes(niche)}
                          onCheckedChange={(checked) => handleNicheChange(niche, checked as boolean)}
                        />
                        <label htmlFor={niche} className="text-sm">
                          {niche}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Follower Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Followers: {followerRange[0].toLocaleString()} - {followerRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={followerRange}
                    onValueChange={setFollowerRange}
                    max={10000000}
                    step={100000}
                    className="w-full"
                  />
                </div>

                {/* Engagement Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Engagement Rate: {engagementRange[0]}% - {engagementRange[1]}%
                  </label>
                  <Slider
                    value={engagementRange}
                    onValueChange={setEngagementRange}
                    max={20}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Find Influencers</h1>
                <p className="text-gray-600">{filteredInfluencers.length} influencers found</p>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="followers">Sort by Followers</SelectItem>
                  <SelectItem value="engagement">Sort by Engagement</SelectItem>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInfluencers.map((influencer) => (
                <Card key={influencer.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                        <AvatarFallback>
                          {influencer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{influencer.name}</CardTitle>
                        <p className="text-sm text-gray-600">@{influencer.username}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{influencer.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          {influencer.platforms.map((platform) => (
                            <div key={platform.name} className="flex items-center space-x-1">
                              {platform.name === "Instagram" && <Instagram className="h-4 w-4 text-pink-500" />}
                              {platform.name === "YouTube" && <Youtube className="h-4 w-4 text-red-500" />}
                              {platform.name === "Twitter" && <Twitter className="h-4 w-4 text-blue-500" />}
                              <span className="text-xs text-gray-600">{platform.followers}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold">{influencer.totalFollowers}</div>
                          <div className="text-xs text-gray-600">Total Followers</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold">{influencer.engagementRate}%</div>
                          <div className="text-xs text-gray-600">Engagement</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-lg font-semibold">{influencer.rating}</span>
                          </div>
                          <div className="text-xs text-gray-600">Rating</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {influencer.niches.slice(0, 3).map((niche) => (
                          <Badge key={niche} variant="secondary" className="text-xs">
                            {niche}
                          </Badge>
                        ))}
                        {influencer.niches.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{influencer.niches.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Link href={`/influencer/${influencer.id}`}>
                        <Button className="w-full">View Profile</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredInfluencers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No influencers found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
