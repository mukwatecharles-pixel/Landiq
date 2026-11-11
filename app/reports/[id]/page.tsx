'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LandProfilePage() {
  const params = useParams();
  const id = params?.id || '209-4521';
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-xs font-semibold transition">&larr; Back</Link>
          <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-emerald-950 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-800">
            ✓ VERIFIED NLC RECORD
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-8">
        {/* Interactive Map Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl h-64 mb-6 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <span className="text-emerald-400 font-bold text-lg z-10">🗺️ Interactive PostGIS Boundary Map</span>
          <p className="text-xs text-slate-400 mt-1 z-10">GPS coordinates mapped directly from Survey of Kenya data.</p>
        </div>

        {/* Property Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl mb-6">
          <div>
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Plot LR No. {id} • Kiambu County</span>
            <h1 className="text-3xl font-black text-white mt-1">Kiambu — Thika Road</h1>
            <p className="text-slate-400 text-sm mt-1">Suggested valuation range: <span className="text-white font-semibold">KES 2,900,000 – KES 3,500,000</span></p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs text-slate-500 uppercase block">Asking Price</span>
            <span className="text-3xl font-black text-emerald-400">KES 3,200,000</span>
          </div>
          <div className="bg-emerald-950 border border-emerald-800 p-4 rounded-xl text-center">
            <span className="text-2xl font-black text-emerald-400 block">82</span>
            <span className="text-[10px] text-emerald-300 font-bold uppercase">LandScore™</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
          {['overview', 'legal', 'infrastructure', 'climate', 'history'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition ${
                activeTab === tab 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl mb-8 space-y-4">
          <h3 className="font-bold text-lg text-white capitalize">{activeTab} Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Registered Owner</span>
              <span className="font-semibold text-white">John K. Mwangi (Verified)[cite: 8]</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Title Status</span>
              <span className="font-semibold text-emerald-400">Active — Freehold[cite: 8]</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Plot Size</span>
              <span className="font-semibold text-white">0.5 Acres (0.20 Ha)[cite: 8]</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Encumbrances</span>
              <span className="font-semibold text-emerald-400">None Registered[cite: 8]</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Rates Arrears</span>
              <span className="font-semibold text-emerald-400">KES 0 — Clear[cite: 8]</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-800">
              <span className="text-slate-400">Land Use</span>
              <span className="font-semibold text-white">Agricultural / Residential[cite: 8]</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href={`/offer/${id}`}
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl text-center transition shadow-lg"
          >
            Make an Offer (Trigger 10% Escrow)[cite: 8, 10]
          </Link>
          <button 
            onClick={() => alert('Report download initiated. Charges KES 3,500 via M-Pesa[cite: 8].')}
            className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-4 rounded-xl text-center transition"
          >
            Download Full Due Diligence Report (KES 3,500)[cite: 8]
          </button>
        </div>
      </div>
    </main>
  );
}