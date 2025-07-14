"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Mail, Lock, User, Building } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent, userType: "brand" | "influencer") => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - set user type in localStorage
    localStorage.setItem("userType", userType)
    localStorage.setItem("isAuthenticated", "true")

    // Redirect based on user type
    if (userType === "influencer") {
      router.push("/dashboard/influencer")
    } else {
      router.push("/dashboard/brand")
    }

    setIsLoading(false)
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
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
                <form onSubmit={(e) => handleLogin(e, "brand")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="brand-email" type="email" placeholder="brand@company.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="brand-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In as Brand"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="influencer" className="space-y-4 mt-6">
                <form onSubmit={(e) => handleLogin(e, "influencer")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="influencer-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="influencer-email"
                        type="email"
                        placeholder="influencer@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
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
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In as Influencer"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center space-y-2">
              <Link href="/auth/forgot-password" className="text-sm text-purple-600 hover:underline">
                Forgot your password?
              </Link>
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-purple-600 hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
