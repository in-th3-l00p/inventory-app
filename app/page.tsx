"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready } = usePrivy();

  return (
    <p>{ready ? "Ready" : "Not ready"}</p>
  );
}
