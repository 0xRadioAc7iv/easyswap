"use client"

import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [riskTolerance, setRiskTolerance] = useState(50)

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-white pb-16">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="max-w-md mx-auto p-4 space-y-6">
          <header className="flex items-center mb-6">
            <Button variant="ghost" size="icon" className="mr-2 text-gray-300 hover:text-white">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-white">Settings</h1>
              <p className="text-sm text-gray-400">Customize your experience</p>
            </div>
          </header>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Notifications</CardTitle>
              <CardDescription className="text-gray-400">Manage your alert preferences</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="flex flex-col gap-1 text-gray-300">
                  <span>Push Notifications</span>
                  <span className="font-normal text-xs text-gray-400">Receive alerts on your device</span>
                </Label>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex flex-col gap-1 text-gray-300">
                  <span>Email Notifications</span>
                  <span className="font-normal text-xs text-gray-400">Receive alerts via email</span>
                </Label>
                <Switch id="email-notifications" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Risk Tolerance</CardTitle>
              <CardDescription className="text-gray-400">Adjust your investment risk level</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Conservative</span>
                  <span>Aggressive</span>
                </div>
                <Slider
                  value={[riskTolerance]}
                  onValueChange={(value) => setRiskTolerance(value[0])}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-black]"
                />
              </div>
              <p className="text-sm text-gray-400">
                Your current risk tolerance: <strong className="text-white">{riskTolerance}%</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Account Preferences</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="currency" className="text-gray-300">Preferred Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency" className="bg-[#3D3D47] border-[#4D4D57] text-white">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#3D3D47] border-[#4D4D57]">
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                    <SelectItem value="jpy">JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="theme" className="text-gray-300">Theme</Label>
                <Select defaultValue="dark">
                  <SelectTrigger id="theme" className="bg-[#3b3b45] border-[#4D4D57] text-white">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#3D3D47] border-[#4D4D57]">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Privacy</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="analytics" className="flex flex-col gap-1 text-gray-300">
                  <span>Usage Analytics</span>
                  <span className="font-normal text-xs text-gray-400">Help us improve by sharing usage data</span>
                </Label>
                <Switch id="analytics" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing" className="flex flex-col gap-1 text-gray-300">
                  <span>Marketing Communications</span>
                  <span className="font-normal text-xs text-gray-400">Receive updates and offers</span>
                </Label>
                <Switch id="marketing" />
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      <Navbar />
    </div>
  )
}

