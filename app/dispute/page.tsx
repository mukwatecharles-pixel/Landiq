'use client';

import React from 'react';
import Link from 'next/link';

export default function DisputePortalPage() {
  const evidenceList = [
    { title: 'Title Deed Copy', date: '1 Jun 2026', status: 'Verified' },
    { title: 'Site Photos (3)', date: '4 Jun 2026', status: 'Verified' },
    { title: 'Chat Transcript', date: '5 Jun 2026', status: 'Submitted' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-xs font-semibold transition">&larr; Dashboard</Link>
          <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
        </div>
        <div className="text-xs bg-red-950 text-red-400 font-bold px-3 py-1 rounded-full border border-red-800">
          ⚠️ ESCROW FROZEN
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-8 space-y-6">
        {/* Dispute Status Card */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Active Dispute • Tier-1 Mediation</span>
              <h1 className="text-2xl font-black text-white mt-1">Transaction #TXN-20260601-0047</h1>[cite: 16]
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Case #DSP-0094[cite: 16]</span>
          </div>
          <p className="text-xs text-slate-400">Filed on 5 Jun 2026[cite: 16]. Mediator assigned from certified panel. All evidence hashed and written to blockchain.</p>
        </div>

        {/* Evidence Submitted Section */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="font-bold text-base text-white">Evidence Submitted</h2>
          <div className="space-y-3">
            {evidenceList.map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-slate-400 mt-0.5">{item.date}[cite: 16]</p>
                </div>
                <span className="bg-emerald-950 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-800">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={() => alert('Evidence upload dialog opened.')}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg"
          >
            Upload More Evidence[cite: 16]
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs transition">
              Message Mediator[cite: 16]
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs transition">
              Mark as Resolved[cite: 16]
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}