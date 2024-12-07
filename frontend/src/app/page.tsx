"use client";

import { Page } from "@/components/Page";
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [anonAadhar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const [isUserVerified, setUserVerified] = useState(false);
  const [connectButtondisabled, setConnectButtonDisabled] = useState(true);

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
      <div>{isUserVerified && <button>Connect Wallet</button>}</div>
    </div>
  );
}
