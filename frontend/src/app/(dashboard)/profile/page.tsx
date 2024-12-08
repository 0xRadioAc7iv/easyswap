"use client"

import Navbar from "@/components/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Wallet, Shield, Bell, CreditCard, HelpCircle, ChevronRight, Award, Zap } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0A] text-white">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="max-w-md mx-auto p-4 space-y-6">
          <header className="text-center">
            <Avatar className="w-16 h-16 mx-auto mb-4">
              <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-white">John Doe</h1>
            <p className="text-sm text-gray-400">john.doe@example.com</p>
            <div className="flex justify-center gap-2 mt-2">
              <Badge variant="secondary" className="bg-[#E7B2DB] text-[#19191F]">
                Pro Investor
              </Badge>
              <Badge variant="secondary" className="bg-[#E7B2DB] text-[#19191F]">
                Top Performer
              </Badge>
            </div>
          </header>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Investment Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">$45,678</p>
                <p className="text-sm text-gray-400">Total Value</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">+22.5%</p>
                <p className="text-sm text-gray-400">All-time Return</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4 overflow-x-auto pb-2">
              {[
                { icon: Award, label: "Top Trader", color: "text-[#E7B2DB]" },
                { icon: Zap, label: "Quick Learner", color: "text-[#E7B2DB]" },
                { icon: Shield, label: "Risk Manager", color: "text-[#E7B2DB]" },
              ].map((achievement, index) => (
                <div key={index} className="flex flex-col items-center min-w-[80px]">
                  <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  <span className="text-xs text-center mt-1 text-gray-300">{achievement.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                { icon: Wallet, label: "Payment Methods" },
                { icon: Shield, label: "Security Settings" },
                { icon: Bell, label: "Notification Preferences" },
                { icon: CreditCard, label: "Subscription Plan" },
                { icon: HelpCircle, label: "Help & Support" },
              ].map((item, index) => (
                <Button key={index} variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-[#3D3D47]">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      <Navbar />
    </div>
  )
}

