'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EscrowPage() {
  const [stkSent, setStkSent] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans py-10 px-6">
      <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs text-emerald-400 font-bold uppercase">Regulated Escrow Service</span>
            <h1 className="text-2xl font-black text-white">Transaction #TXN-20260601-0047</h1>[cite: 15]
          </div>
          <Link href="/" className="text-xs text-slate-400 hover:text-emerald-400">&larr; Dashboard</Link>
        </div>

        <div className="space-y-3 bg-slate-950 p-5 rounded-xl border border-slate-800 text-sm mb-6">
          <div className="flex justify-between">
            <span className="text-slate-400">Property</span>
            <span className="font-semibold text-white">Kiambu — Thika Road, LR 209/4521</span>[cite: 15]
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Agreed Price</span>
            <span className="font-semibold text-white">KES 3,100,000</span>[cite: 15]
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Platform Fee (1.5%)</span>
            <span className="font-semibold text-white">KES 46,500</span>[cite: 15]
          </div>
          <div className="flex justify-between pt-3 border-t border-slate-800 text-base">
            <span className="text-slate-300 font-bold">10% Deposit Required</span>
            <span className="font-black text-emerald-400">KES 310,000</span>[cite: 15]
          </div>
        </div>

        {stkSent ? (
          <div className="bg-emerald-950/40 border border-emerald-800 p-6 rounded-xl text-center space-y-3">
            <span className="text-3xl">📱</span>
            <h3 className="text-lg font-bold text-emerald-400">M-Pesa STK Push Sent!</h3>
            <p className="text-xs text-slate-300">Check your phone (+254 712 345 678) and enter your M-Pesa PIN to authorize the KES 310,000 deposit[cite: 15].</p>
            <div className="animate-pulse text-xs text-emerald-500 font-semibold pt-2">Waiting for M-Pesa confirmation...[cite: 15]</div>
          </div>
        ) : (
          <button 
            onClick={() => setStkSent(true)}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl text-sm transition shadow-lg"
          >
            Pay 10% Deposit via M-Pesa STK Push (KES 310,000)[cite: 15]
          </button>
        )}

        <div className="mt-6 text-center text-xs text-slate-500">
          <p>Funds go to regulated escrow, not the seller directly[cite: 15]. 100% refundable if the deal fails[cite: 15].</p>
        </div>
      </div>
    </main>
  );
}