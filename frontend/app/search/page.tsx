'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [county, setCounty] = useState('Nakuru');
  const [maxSize, setMaxSize] = useState(3);
  const [minScore, setMinScore] = useState(70);

  const listings = [
    { id: 'lake-view', title: 'Nakuru — Lake View', size: '1.5 Acres', price: 'KES 4.5M', score: 81 },
    { id: 'bahati', title: 'Nakuru — Bahati', size: '3.0 Acres', price: 'KES 7.2M', score: 76 },
    { id: 'molo', title: 'Nakuru — Molo', size: '0.75 Acres', price: 'KES 2.1M', score: 68 },
    { id: 'njoro', title: 'Nakuru — Njoro', size: '5.0 Acres', price: 'KES 11M', score: 72 },
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
          <span className="text-emerald-400 font-bold">4,820</span> verified listings[cite: 7]
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter Panel (Mockup Screen 06b) */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl h-fit space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <h2 className="font-bold text-base text-white">Filter Listings</h2>
            <button onClick={() => { setCounty('All'); setMaxSize(50); setMinScore(0); }} className="text-[10px] text-emerald-400 hover:underline">Clear All</button>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">County</label>
            <select 
              value={county} 
              onChange={(e) => setCounty(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 px-3 py-2 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="Nakuru">Nakuru</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kisumu">Kisumu</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Max Size: {maxSize} Acres</label>
            <input 
              type="range" 
              min="0.25" 
              max="20" 
              step="0.25"
              value={maxSize}
              onChange={(e) => setMaxSize(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Minimum LandScore™: {minScore}+</label>
            <input 
              type="range" 
              min="50" 
              max="95" 
              value={minScore}
              onChange={(e) => setMinScore(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950"
            />
          </div>

          <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="accent-emerald-500" />
              <span>Road Access Available</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="accent-emerald-500" />
              <span>Power Grid Connected</span>
            </label>
          </div>
        </div>

        {/* Search Results (Mockup Screen 06a) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 flex-wrap gap-y-2">
              <span className="bg-emerald-950 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-800">{county}</span>
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full">&lt; {maxSize} Acres</span>
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full">Score {minScore}+</span>
            </div>
            <span className="text-slate-400 font-semibold">{listings.length} results</span>
          </div>

          <div className="space-y-3">
            {listings.map((item) => (
              <Link 
                href={`/reports/${item.id}`} 
                key={item.id}
                className="block bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-emerald-500/50 transition flex justify-between items-center group"
              >
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full border border-emerald-800">Verified ✓</span>
                    <span className="text-xs text-slate-400">{item.size}</span>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition">{item.title}</h3>
                  <p className="text-emerald-400 font-black text-sm mt-1">{item.price}</p>
                </div>
                <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center font-black text-sm ${
                  item.score >= 80 ? 'border-emerald-500 text-emerald-400' : item.score >= 70 ? 'border-amber-500 text-amber-400' : 'border-red-500 text-red-400'
                }`}>
                  {item.score}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}