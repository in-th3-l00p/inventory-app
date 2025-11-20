"use client";

import SupabaseProvider from "./supabase";
import InnerPrivyProvider from "./privy";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
      <SupabaseProvider>
        <InnerPrivyProvider>
          {children}
        </InnerPrivyProvider>
      </SupabaseProvider>
    );
}