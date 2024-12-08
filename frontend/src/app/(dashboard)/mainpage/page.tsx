"use client"

import Navbar from "@/components/Navbar"
import { BellRing, TrendingUp, ArrowUpRight, Wallet, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0A] text-white pb-16">
      <div className="max-w-md mx-auto p-4 space-y-6">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-white">Hello, Human!</h2>
            <p className="text-sm text-gray-400">Welcome to AI Agent</p>
          </div>
          <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white">
            <BellRing className="h-5 w-5" />
          </Button>
        </header>

        <Card className="bg-[#1C1D1C] border-[#3D3D47]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Portfolio Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-2xl font-bold text-white">$12,761.65</span>
                <div className="flex items-center text-sm text-green-400">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+1.52%</span>
                </div>
              </div>
              <Button size="sm" className="bg-[#E7B2DB] hover:bg-[#D1A1C5] text-[#19191F]">
                <TrendingUp className="h-4 w-4 mr-2" />
                Invest
              </Button>
            </div>
            <Progress value={65} className="mt-4 bg-[#3D3D47]" />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Risk: Moderate</span>
              <span>Return: 12.5%</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Wallet className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-sm font-medium text-gray-300">Assets</span>
              <span className="text-2xl font-bold text-white">8</span>
            </CardContent>
          </Card>
          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-sm font-medium text-gray-300">Risk Level</span>
              <span className="text-2xl font-bold text-white">Medium</span>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1C1D1C] border-[#3D3D47]">
          <CardHeader>
            <CardTitle className="text-lg text-white">AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-300">Based on your portfolio, consider:</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
              <li>Diversifying into emerging markets</li>
              <li>Increasing bond allocation for stability</li>
              <li>Exploring AI-focused ETFs for growth</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Navbar />
    </div>
  )
}

