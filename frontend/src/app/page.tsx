"use client";

import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { useEffect, useState } from "react";
import { WalletDefault } from "@coinbase/onchainkit/wallet";

export default function Home() {
  const [anonAadhar] = useAnonAadhaar();
  const [isUserVerified, setUserVerified] = useState(false);

  useEffect(() => {
    if (anonAadhar.status === "logged-in") {
      setUserVerified(true);
    }
  }, [anonAadhar]);

  return (
    <div>
      <div>
        <LogInWithAnonAadhaar nullifierSeed={1234} />
        <div>Verify yourself with Anon Aadhar</div>
      </div>
      <div>{isUserVerified && <WalletDefault />}</div>
    </div>
  );
}
