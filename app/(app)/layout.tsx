"use client";

import { usePrivy } from "@privy-io/react-auth";
import NotFound from "@/app/not-found";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { ready, authenticated, user } = usePrivy();

    if (!ready) {
        return <div>Loading...</div>;
    }
    if (ready && !authenticated) {
        return <NotFound />;
    }

    return (
        <>{children}</>
    )
}