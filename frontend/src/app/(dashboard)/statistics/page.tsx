"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, PieChart } from "@/components/ui/chart";

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0A] text-white">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="max-w-md mx-auto p-4 space-y-6">
          <header>
            <h1 className="text-2xl font-bold text-white">Statistics</h1>
            <p className="text-sm text-gray-400">Analyze your portfolio performance</p>
          </header>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3 bg-[#1C1D1C] border border-[#3D3D47]">
              <TabsTrigger value="overview" className="text-gray-300 data-[state=active]:bg-[#3b3b45] data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="assets" className="text-gray-300 data-[state=active]:bg-[#3b3b45] data-[state=active]:text-white">Assets</TabsTrigger>
              <TabsTrigger value="history" className="text-gray-300 data-[state=active]:bg-[#3b3b45] data-[state=active]:text-white">History</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card className="bg-[#1C1D1C] border-[#1C1D1C]">
                <CardHeader>
                  <CardTitle className="text-white">Portfolio Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    config={{
                      value: {
                        label: "Value",
                        color: "hsl(300, 76%, 72%)", // #E7B2DB in HSL
                      },
                    }}
                    className="h-[200px]"
                    data={[
                      { date: "Jan", value: 1000 },
                      { date: "Feb", value: 1200 },
                      { date: "Mar", value: 1100 },
                      { date: "Apr", value: 1300 },
                      { date: "May", value: 1600 },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="assets">
              <Card className="bg-[#1C1D1C] border border-[#3D3D47]">
                <CardHeader>
                  <CardTitle className="text-white">Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    config={{
                      btc: {
                        label: "BTC",
                        color: "hsl(300, 76%, 72%)", // #E7B2DB in HSL
                      },
                      eth: {
                        label: "ETH",
                        color: "hsl(276, 91%, 60%)",
                      },
                      usdc: {
                        label: "USDC",
                        color: "hsl(142, 71%, 45%)",
                      },
                      other: {
                        label: "Other",
                        color: "hsl(0, 0%, 60%)",
                      },
                    }}
                    className="h-[200px]"
                    data={[
                      { name: "BTC", btc: 40 },
                      { name: "ETH", eth: 30 },
                      { name: "USDC", usdc: 20 },
                      { name: "Other", other: 10 },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-[#1C1D1C] border-[#3D3D47]">
            <CardHeader>
              <CardTitle className="text-white">Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Total Return</p>
                <p className="text-2xl font-bold text-white">+18.5%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Sharpe Ratio</p>
                <p className="text-2xl font-bold text-white">1.23</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Volatility</p>
                <p className="text-2xl font-bold text-white">12.4%</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Max Drawdown</p>
                <p className="text-2xl font-bold text-white">-8.7%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      <Navbar />
    </div>
  );
}

