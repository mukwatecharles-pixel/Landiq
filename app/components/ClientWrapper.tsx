'use client';

import useAntiCheat from '@/hooks/useAntiCheat';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  // Automatically activate anti-cheat tab-blur listener across the app
  useAntiCheat();

  return <>{children}</>;
}