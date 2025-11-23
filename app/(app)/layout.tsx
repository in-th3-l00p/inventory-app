"use client";

import { usePrivy } from "@privy-io/react-auth";
import NotFound from "@/app/not-found";
import AppLayout from "./components/app-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { ready, authenticated, user } = usePrivy();

    if (!ready) {
        return <div>Loading...</div>;
    }
    if (ready && !authenticated) {
        return <NotFound />;
    }

    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}