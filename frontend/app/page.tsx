'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center space-y-6">
        <div className="inline-block bg-emerald-950/60 border border-emerald-800/80 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-bold tracking-wide">
          🌿 VERIFIED LAND • ZERO BROKERS • ZERO FRAUD
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Africa's Intelligent Land Marketplace
        </h1>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
          Buy and sell land securely across Kenya with automated National Land Commission registry checks, PostGIS boundaries, and AI LandScore™ analytics.
        </p>

        {/* Working Search Bar */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2 bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-2xl">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by county (e.g. Nakuru, Kiambu, Nairobi)..." 
            className="w-full bg-transparent px-4 py-3 text-sm text-white focus:outline-none"
          />
          <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition flex items-center shrink-0">
            Search Verified Land
          </button>
        </form>
      </div>

      {/* Featured Listings Section */}
      <div className="max-w-5xl mx-auto px-6 space-y-4">
        <h2 className="text-lg font-bold text-white">Featured Verified Listings</h2>
        <p className="text-xs text-slate-400">Every parcel checked against NLC records with active infrastructure audits.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="bg-emerald-950 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-800">Agricultural</span>
              <span className="text-slate-400 font-bold">LandScore™: 82</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Kiambu — Thika Road</h3>
              <p className="text-xs text-slate-400 mt-0.5">Plot LR No. 209/4521 • 0.5 Acres</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Asking Price</span>
                <span className="text-base font-black text-emerald-400">KES 3,200,000</span>
              </div>
              <div className="flex gap-2">
                <Link href="/reports/209-4521" className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition">
                  View Report
                </Link>
                <Link href="/escrow/209-4521" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition">
                  Secure Escrow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}