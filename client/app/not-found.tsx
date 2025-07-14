import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <TrendingUp className="h-24 w-24 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 max-w-md">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/">
          <Button size="lg" className="mt-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
