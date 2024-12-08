"use client"

import React from "react"
import { Home, Search, User, Settings } from 'lucide-react'
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Navbar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { icon: Home, path: "/statistics", label: "Home" },
    { icon: Search, path: "/mainpage", label: "Search" },
    { icon: User, path: "/profile", label: "Profile" },
    { icon: Settings, path: "/settings", label: "Settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#19191F]/80 backdrop-blur-lg border-t border-[#3D3D47] z-50">
      <ul className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map(({ icon: Icon, path, label }) => (
          <li key={path}>
            <button
              onClick={() => router.push(path)}
              className={cn(
                "flex flex-col items-center p-3 rounded-md transition-colors",
                isActive(path)
                  ? "text-[#E7B2DB] bg-[#E7B2DB]/10"
                  : "text-gray-400 hover:text-[#E7B2DB] hover:bg-[#E7B2DB]/5"
              )}
            >
              <Icon className="h-5 w-5 text-current" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;

