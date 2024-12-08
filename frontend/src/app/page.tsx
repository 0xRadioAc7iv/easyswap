"use client";

import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "@anon-aadhaar/react";
import { useEffect, useState } from "react";
import { WalletDefault } from "@coinbase/onchainkit/wallet";
import Image from 'next/image'

export default function Home() {
  const [anonAadhar] = useAnonAadhaar();
  const [isUserVerified, setUserVerified] = useState(false);

  useEffect(() => {
    if (anonAadhar.status === "logged-in") {
      setUserVerified(true);
    }
  }, [anonAadhar]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#19191F] to-[#2D2D35] text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI Agent</h1>
      
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/images/robot.png"
          alt="AI Agent Robot"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      
      <p className="text-lg text-center mb-8 max-w-md">
        Your intelligent assistant for managing investments and financial decisions.
      </p>
      
      <div className="flex gap-4">
        <div className="mt-4">
          <LogInWithAnonAadhaar nullifierSeed={1234} />
        </div>
      <div><WalletDefault /></div>
      </div>
    </div>
  )
}
