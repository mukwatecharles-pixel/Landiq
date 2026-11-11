'use client';

import React from 'react';
import Link from 'next/link';

export default function SellerDashboard() {
  const listings = [
    { id: '209-4521', title: 'Kiambu — Thika Rd', price: 'KES 3.2M', status: 'Active', offers: '2 offers', score: 82 },
    { id: 'lake-view', title: 'Nakuru — Lake View', price: 'KES 8.7M', status: 'Active', offers: '0 offers', score: 74 },
    { id: 'kondele', title: 'Kisumu — Kondele', price: 'KES 1.5M', status: 'Draft', offers: 'Draft', score: 61 },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-xs font-semibold transition">&larr; Home</Link>
          <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
        </div>
        <div className="text-xs text-slate-400">
          Welcome, <span className="text-white font-bold">Mary Wanjiku</span>[cite: 12]
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-8 space-y-6">
        {/* Metric Cards (Mockup Screen 10 Top Stats) */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-emerald-400 block">3</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">Active Listings[cite: 12]</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-emerald-400 block">7</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">Total Views Today[cite: 12]</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-emerald-400 block">2</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">Pending Offers[cite: 12]</span>
          </div>
        </div>

        {/* My Listings Section */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="font-bold text-base text-white">My Listings</h2>
          <div className="space-y-3">
            {listings.map((item) => (
              <div key={item.id} className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.status === 'Active' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xs text-slate-400">{item.offers}</span>
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-emerald-400 text-xs font-bold mt-0.5">{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center font-black text-xs text-emerald-400">
                    {item.score}
                  </div>
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition">
                    Edit[cite: 12]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link 
            href="/kyc" 
            className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl text-center transition shadow-lg text-sm"
          >
            + List New Land[cite: 12]
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs transition">
              View Analytics[cite: 12]
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold py-3 rounded-xl text-xs transition">
              View Earnings[cite: 12]
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}