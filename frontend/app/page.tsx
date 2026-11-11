import React from 'react';
import Link from 'next/link';

export default function LandIQHome() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 text-white font-bold p-2 rounded-lg">LI</div>
            <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <Link href="#search" className="hover:text-emerald-400 transition">Explore Land</Link>
            <Link href="#valuation" className="hover:text-emerald-400 transition">AI Valuation & LandScore™</Link>
            <Link href="#escrow" className="hover:text-emerald-400 transition">Secure Escrow</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/login" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
              Client Portal Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="search" className="py-20 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            🌿 Verified Land • Zero Brokers • Zero Fraud
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">
            Africa's Intelligent Land Marketplace
          </h1>
          <p className="text-slate-400 text-base md:text-lg mb-8">
            Buy and sell land securely across Kenya with automated National Land Commission registry checks, PostGIS boundaries, and AI LandScore™ analytics.
          </p>

          {/* Search Box Bar */}
          <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl flex flex-col md:flex-row gap-3 shadow-xl">
            <input 
              type="text" 
              placeholder="Search by county (e.g. Nakuru, Kiambu, Nairobi)..." 
              className="flex-grow bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            />
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition">
              Search Verified Land
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Featured Verified Listings</h2>
            <p className="text-slate-400 text-sm">Every parcel checked against NLC records with active infrastructure audits.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-500/50 transition">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] bg-emerald-950 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-800">Agricultural</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">LandScore™: 82</span>
              </div>
              <h3 className="font-bold text-lg text-white">Kiambu — Thika Road</h3>
              <p className="text-xs text-slate-400 mt-1">Plot LR No. 209/4521 • 0.5 Acres</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-500 uppercase">Asking Price</p>
                <span className="text-xl font-black text-emerald-400">KES 3,200,000</span>
              </div>
              <Link href="/reports/209-4521" className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-slate-700 text-center">
                View Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10 px-6 text-center text-slate-500 text-xs">
        <p>&copy; 2026 LandIQ Africa Ltd. All rights reserved. Secure Title Verification & Escrow Platform.</p>
      </footer>
    </main>
  );
}