'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const pendingApprovals = [
    { id: 'LR-8932', title: 'Nakuru — Njoro Plot', owner: 'James Kiprono', status: 'Pending NLC Check' },
    { id: 'LR-4102', title: 'Kiambu — Ruiru Acres', owner: 'Amina Mohamed', status: 'Pending KYC Review' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-xs font-semibold transition">&larr; Exit Admin</Link>
          <span className="text-xl font-black tracking-wider text-red-500">LANDIQ ADMIN</span>
        </div>
        <div className="text-xs bg-red-950 text-red-400 font-bold px-3 py-1 rounded-full border border-red-800">
          Superuser Access
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-8 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-emerald-400 block">4,820</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">Verified Listings</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-amber-400 block">KES 48.2M</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">Active Escrow Volume</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-red-400 block">2</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">Fraud Alerts</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-center">
            <span className="text-2xl font-black text-emerald-400 block">99.9%</span>
            <span className="text-xs text-slate-400 font-semibold uppercase mt-1 block">API Uptime</span>
          </div>
        </div>

        {/* Pending Approvals Queue */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="font-bold text-base text-white">Registry & Verification Queue</h2>
          <div className="space-y-3">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="bg-amber-950 text-amber-400 font-bold px-2 py-0.5 rounded-full border border-amber-800">{item.status}</span>
                    <span className="text-slate-400">{item.id}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-slate-400 mt-0.5">Submitted by: {item.owner}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-semibold transition">Approve</button>
                  <button className="bg-red-950 hover:bg-red-900 text-red-400 border border-red-800 px-3 py-1.5 rounded-lg font-semibold transition">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}