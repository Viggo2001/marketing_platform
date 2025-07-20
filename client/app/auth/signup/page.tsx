"use client"

import type React from "react"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { TrendingUp, Mail, Lock, User, Building } from "lucide-react"
import axios from "axios"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  // Brand form state
  const [brandForm, setBrandForm] = useState({
    companyName: "",
    name: "",
    email: "",
    password: ""
  })
  
  // Influencer form state
  const [influencerForm, setInfluencerForm] = useState({
    name: "",
    email: "",
    bio: "",
    password: ""
  })
  
  // Handle brand form changes
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrandForm({
      ...brandForm,
      [e.target.id.replace("brand-", "")]: e.target.value
    })
  }
  
  // Handle influencer form changes
  const handleInfluencerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfluencerForm({
      ...influencerForm,
      [e.target.id.replace("influencer-", "")]: e.target.value
    })
  }

  const handleSignup = async (e: FormEvent, userType: "brand" | "influencer") => {
    e.preventDefault()
    setIsLoading(true)

    let requestBody = undefined

    if (userType === "brand") {
      requestBody = {
        companyName: brandForm.companyName,
        name: brandForm.name,
        email: brandForm.email,
        passwordHash: brandForm.password,
        userType: "BRAND"
      }
    } else {
      requestBody = {
        name: influencerForm.name,
        email: influencerForm.email,
        bio: influencerForm.bio,
        passwordHash: influencerForm.password,
        userType: "INFLUENCER"
      }
    }
    
    try {
      const response = await axios.post("http://localhost:8080/user/save", requestBody);

      // Store user data
      localStorage.setItem("userType", "brand");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userData", JSON.stringify(response.data));
      
      if (userType === "brand") {
        router.push("/dashboard/brand");
      } else {
        router.push("/dashboard/influencer");
      }
    } catch (error) {
      console.error("Signup error:", error);
      // Handle error (you could add error state and display to user)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">InfluencerHub</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join our platform today</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="brand" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="brand" className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>Brand</span>
                </TabsTrigger>
                <TabsTrigger value="influencer" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Influencer</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="brand" className="space-y-4 mt-6">
                <form onSubmit={(e) => handleSignup(e, "brand")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand-companyName">Company Name</Label>
                    <Input 
                      id="brand-companyName" 
                      placeholder="Your Company" 
                      value={brandForm.companyName}
                      onChange={handleBrandChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-name">Your Name</Label>
                    <Input 
                      id="brand-name" 
                      placeholder="John Doe" 
                      value={brandForm.name}
                      onChange={handleBrandChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="brand-email" 
                        type="email" 
                        placeholder="brand@company.com" 
                        className="pl-10" 
                        value={brandForm.email}
                        onChange={handleBrandChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="brand-password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10" 
                        value={brandForm.password}
                        onChange={handleBrandChange}
                        required 
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Brand Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="influencer" className="space-y-4 mt-6">
                <form onSubmit={(e) => handleSignup(e, "influencer")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="influencer-name">Full Name</Label>
                    <Input 
                      id="influencer-name" 
                      placeholder="Jane Smith" 
                      value={influencerForm.name}
                      onChange={handleInfluencerChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="influencer-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="influencer-email"
                        type="email"
                        placeholder="influencer@example.com"
                        className="pl-10"
                        value={influencerForm.email}
                        onChange={handleInfluencerChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="influencer-bio">Bio</Label>
                    <Textarea 
                      id="influencer-bio" 
                      placeholder="Tell us about yourself and your content..." 
                      rows={3} 
                      value={influencerForm.bio}
                      onChange={handleInfluencerChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="influencer-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="influencer-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={influencerForm.password}
                        onChange={handleInfluencerChange}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Influencer Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <div className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-purple-600 hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
