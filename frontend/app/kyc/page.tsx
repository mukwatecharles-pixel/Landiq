'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function KycPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans py-10 px-6 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-2">
            <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
          </Link>
          <h1 className="text-xl font-bold text-white">Verify Your Identity</h1>
          <p className="text-xs text-slate-400 mt-1">Required to List Land • Step {step} of 3 — {step === 1 ? 'ID Document' : 'Liveness Check'}[cite: 5]</p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center bg-slate-950">
              <span className="text-3xl">🪪</span>
              <p className="text-xs text-slate-300 font-semibold mt-2">Upload National ID / Passport</p>
              <p className="text-[10px] text-slate-500 mt-1">Front side • JPG or PDF • Max 5MB[cite: 5]</p>
              <div className="flex gap-2 mt-4">
                <button type="button" className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-xs font-bold transition">Choose File[cite: 5]</button>
                <button type="button" className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-xs font-bold transition">Use Camera[cite: 5]</button>
              </div>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-800 p-3 rounded-xl text-[11px] text-emerald-300 text-center">
              🔒 Your ID is encrypted and verified only against IPRS. Never shared[cite: 5].
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg disabled:opacity-50"
            >
              {loading ? 'Processing NLC/IPRS Check...' : 'Verify & Continue'}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="border-2 border-emerald-500/50 rounded-xl p-8 bg-slate-950 relative overflow-hidden">
              <span className="text-4xl animate-pulse">🤳</span>
              <h3 className="text-sm font-bold text-white mt-3">Liveness Check in Progress</h3>
              <p className="text-[10px] text-slate-400 mt-1">Powered by Smile Identity API[cite: 5]</p>
            </div>
            <Link 
              href="/dashboard" 
              className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition text-center"
            >
              KYC Approved — Go to Dashboard
            </Link>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-400 transition">&larr; Back to Home</Link>
        </div>
      </div>
    </main>
  );
}