'use client';

import {createContext, useContext, useMemo} from 'react';
import {SupabaseClient} from '@supabase/supabase-js';
import {createSupabaseClient} from '@/lib/supabase/client';

interface SupabaseContextType {
  supabase: SupabaseClient;
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};

export default function SupabaseProvider({children}: {children: React.ReactNode}) {
  const supabase = useMemo(() => createSupabaseClient(), []);

  return (
    <SupabaseContext.Provider value={{supabase}}>
      {children}
    </SupabaseContext.Provider>
  );
};
