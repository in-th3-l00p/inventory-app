'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { useSupabase } from './supabase';

export default function InnerPrivyProvider({children}: {children: React.ReactNode}) {
  const {loading, supabase, session} = useSupabase();

  async function getCustomAuthToken() {
    if (!session) return undefined;

    const {data, error} = await supabase.auth.getSession();
    if (error) {
      console.error('Error getting session:', error);
      return undefined;
    }

    return data.session?.access_token || undefined;
  }

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        customAuth: {
          isLoading: loading,
          getCustomAccessToken: getCustomAuthToken
        },
        embeddedWallets: {
          createOnLogin: 'all-users'
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}