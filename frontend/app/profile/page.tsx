'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-xs font-semibold transition">&larr; Home</Link>
          <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
        </div>
        <div className="text-xs bg-emerald-950 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-800">
          KYC Verified ✓
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-8 space-y-6">
        {/* User Info Card */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500/50 flex items-center justify-center text-xl font-bold text-emerald-400">
            MW
          </div>
          <div>
            <h1 className="text-xl font-black text-white">Mary Wanjiku</h1>
            <p className="text-xs text-slate-400 mt-0.5">mary.wanjiku@landiq.co.ke • +254 712 345 678</p>
            <span className="inline-block mt-2 text-[10px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full">Role: Buyer & Seller</span>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="font-bold text-base text-white">Security & Verification</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 rounded-xl">
              <div>
                <h3 className="text-xs font-bold text-white">Two-Factor Authentication (2FA)</h3>
                <p className="text-[11px] text-slate-400">Secure logins via SMS / Authenticator app</p>
              </div>
              <input 
                type="checkbox" 
                checked={twoFactor} 
                onChange={() => setTwoFactor(!twoFactor)} 
                className="accent-emerald-500 w-4 h-4 cursor-pointer" 
              />
            </div>

            <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 rounded-xl">
              <div>
                <h3 className="text-xs font-bold text-white">SMS & WhatsApp Alerts</h3>
                <p className="text-[11px] text-slate-400">Instant updates for escrow and offer statuses</p>
              </div>
              <input 
                type="checkbox" 
                checked={smsAlerts} 
                onChange={() => setSmsAlerts(!smsAlerts)} 
                className="accent-emerald-500 w-4 h-4 cursor-pointer" 
              />
            </div>
          </div>
        </div>

        {/* Account Quick Links */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/seller-dashboard" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 p-4 rounded-xl text-center text-xs font-bold text-slate-200 transition">
            My Listings & Properties
          </Link>
          <Link href="/notifications" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 p-4 rounded-xl text-center text-xs font-bold text-slate-200 transition">
            Notification History
          </Link>
        </div>
      </div>
    </main>
  );
}