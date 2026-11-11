'use client';

import React from 'react';
import Link from 'next/link';

export default function NotificationsPage() {
  const notifications = [
    { title: 'Offer Accepted!', desc: 'Seller accepted KES 3.1M for Thika Road...', time: '2 min ago', unread: true },
    { title: 'Deposit Confirmed', desc: 'M-Pesa payment of KES 310,000 received in escrow.', time: '18 min ago', unread: true },
    { title: 'New Match Found', desc: 'A listing matching your saved search appeared.', time: '1 hr ago', unread: true },
    { title: 'KYC Approved', desc: 'Your identity has been verified successfully.', time: 'Yesterday', unread: false },
    { title: 'Price Alert', desc: 'Your Thika listing received 12 views today.', time: '2 days ago', unread: false },
    { title: 'Report Ready', desc: 'Your paid due diligence report for LR 209/4521 is ready.', time: '3 days ago', unread: false },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-xs font-semibold transition">&larr; Home</Link>
          <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
        </div>
        <div className="text-xs bg-emerald-950 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-800">
          3 Unread[cite: 17]
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-8 space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-black text-white">Notifications Centre</h1>
          <span className="text-xs text-slate-400">Push via Firebase • SMS via Africa's Talking[cite: 17]</span>
        </div>

        <div className="space-y-3">
          {notifications.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900 border p-5 rounded-2xl flex items-start justify-between transition hover:border-emerald-500/50 ${
                item.unread ? 'border-emerald-500/40 bg-slate-900/90' : 'border-slate-800'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  {item.unread && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
                </div>
                <p className="text-xs text-slate-300">{item.desc}</p>
                <span className="text-[10px] text-slate-500 block pt-1">{item.time}</span>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}