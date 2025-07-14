import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Users, TrendingUp, Star, Instagram, Youtube, Twitter } from "lucide-react"
import { influencers } from "@/lib/mock-data"

export default function HomePage() {
  const featuredInfluencers = influencers.slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">InfluencerHub</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/search" className="text-gray-700 hover:text-purple-600">
                Find Influencers
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600">
                How it Works
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find the Perfect
            <span className="text-purple-600"> Influencer</span>
            <br />
            for Your Brand
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with top social media influencers across all platforms. Filter by niche, audience size, engagement
            rate, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Search influencers by name, niche, or platform..." className="pl-10 h-12 text-lg" />
              </div>
              <Link href="/search">
                <Button size="lg" className="h-12 px-8">
                  Search
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Verified Influencers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Industry Niches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Influencers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Influencers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover top-performing influencers across various niches and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredInfluencers.map((influencer) => (
              <Card key={influencer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
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
                      <div className="flex items-center space-x-2 mt-2">
                        {influencer.platforms.map((platform) => (
                          <div key={platform.name} className="flex items-center space-x-1">
                            {platform.name === "Instagram" && <Instagram className="h-4 w-4 text-pink-500" />}
                            {platform.name === "YouTube" && <Youtube className="h-4 w-4 text-red-500" />}
                            {platform.name === "Twitter" && <Twitter className="h-4 w-4 text-blue-500" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Followers</span>
                      <span className="font-semibold">{influencer.totalFollowers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Engagement</span>
                      <span className="font-semibold">{influencer.engagementRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{influencer.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {influencer.niches.slice(0, 2).map((niche) => (
                        <Badge key={niche} variant="secondary" className="text-xs">
                          {niche}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/influencer/${influencer.id}`}>
                      <Button className="w-full mt-4">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/search">
              <Button variant="outline" size="lg">
                View All Influencers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to find and connect with the right influencers for your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Search & Filter</h3>
              <p className="text-gray-600">Use our advanced filters to find influencers that match your criteria</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Review Profiles</h3>
              <p className="text-gray-600">
                Browse detailed profiles with analytics, past campaigns, and audience insights
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Connect & Collaborate</h3>
              <p className="text-gray-600">Reach out directly and start building successful partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">InfluencerHub</span>
              </div>
              <p className="text-gray-400">The leading platform for connecting brands with social media influencers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Find Influencers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InfluencerHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
