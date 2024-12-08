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
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI Agent</h1>
        
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <div className="bg-[#E7B2DB]/10 rounded-lg p-4 backdrop-blur-sm">
            <LogInWithAnonAadhaar nullifierSeed={1234} />
          </div>

          <div className="relative w-64 h-64">
            <Image
              src="/images/robot.png"
              alt="AI Agent Robot"
              layout="fill"
              objectFit="contain"
              priority
              className="drop-shadow-[0_0_15px_rgba(231,178,219,0.3)]"
            />
          </div>

          <div className="bg-[#E7B2DB]/10 rounded-lg p-4 backdrop-blur-sm">
            <WalletDefault />
          </div>
        </div>
        
        <p className="text-lg text-center mt-8 mb-4 max-w-md">
          Your intelligent assistant for managing investments and financial decisions.
        </p>
        
        {isUserVerified && (
          <p className="text-[#E7B2DB] font-semibold">
            User verified successfully!
          </p>
        )}
      </div>
    </div>
  )
}

