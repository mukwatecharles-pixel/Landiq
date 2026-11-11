'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ListLandPage() {
  const [step, setStep] = useState(1);
  const [plotNo, setPlotNo] = useState('');
  const [county, setCounty] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans py-10 px-6 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-2">
            <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
          </Link>
          <h1 className="text-xl font-bold text-white">List Your Land</h1>
          <p className="text-xs text-slate-400 mt-1">Step {step} of 4 — Title Details & NLC Check[cite: 13]</p>
        </div>

        {step === 1 && !verified && (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Title / Plot Number *</label>
              <input 
                type="text" 
                value={plotNo}
                onChange={(e) => setPlotNo(e.target.value)}
                placeholder="e.g. LR No. 209/4521" 
                required
                className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">County *</label>
              <input 
                type="text" 
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                placeholder="e.g. Kiambu" 
                required
                className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <button 
              type="submit" 
              disabled={verifying}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg disabled:opacity-50"
            >
              {verifying ? 'Checking NLC Registry API...' : 'Verify Title with National Registry[cite: 13]'}
            </button>
          </form>
        )}

        {verified && (
          <div className="space-y-4">
            <div className="bg-emerald-950/40 border border-emerald-800 p-4 rounded-xl text-center">
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">✓ TITLE VERIFIED</span>
              <p className="text-[11px] text-emerald-300 mt-0.5">Matches NLC Registry Record[cite: 13]</p>
            </div>

            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Registered Owner</span>
                <span className="font-semibold text-white">John K. Mwangi[cite: 13]</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Title Status</span>
                <span className="font-semibold text-emerald-400">Active — Freehold[cite: 13]</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Encumbrances</span>
                <span className="font-semibold text-emerald-400">None[cite: 13]</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Rates Due</span>
                <span className="font-semibold text-emerald-400">KES 0[cite: 13]</span>
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg"
            >
              Confirmed — Proceed to Step 2[cite: 13]
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-4">
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl">
              <h3 className="text-sm font-bold text-white">Location & Boundaries (GPS Mapping)</h3>
              <p className="text-xs text-slate-400 mt-1">PostGIS boundary polygon plotted successfully.</p>
            </div>
            <Link 
              href="/seller-dashboard" 
              className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition text-center"
            >
              Save & Publish Listing
            </Link>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-slate-500">
          <Link href="/seller-dashboard" className="hover:text-emerald-400 transition">&larr; Back to Dashboard</Link>
        </div>
      </div>
    </main>
  );
}