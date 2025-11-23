'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { useSupabase } from './supabase';

export default function InnerPrivyProvider({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}>
      {children}
    </PrivyProvider>
  );
}