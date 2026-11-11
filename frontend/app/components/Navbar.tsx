'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 h-20 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="bg-emerald-600 text-white font-black px-2.5 py-1 rounded-lg text-xs">LI</span>
          <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 text-xs font-semibold text-slate-300">
          <Link href="/dashboard" className="text-emerald-400 hover:underline">Control Hub</Link>
          <Link href="/search" className="hover:text-emerald-400 transition">Explore Land</Link>
          <Link href="/seller-dashboard" className="hover:text-emerald-400 transition">Seller Dashboard</Link>
          <Link href="/ussd" className="hover:text-emerald-400 transition">USSD *384#</Link>
          <Link href="/admin" className="hover:text-emerald-400 transition">Admin</Link>
        </nav>
      </div>

      <div className="flex items-center space-x-3 text-xs">
        <Link href="/notifications" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-xl transition">
          🔔 Notifications
        </Link>
        <Link href="/profile" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-xl transition">
          Profile & Settings
        </Link>
        <Link href="/login" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl transition shadow-lg">
          Client Login
        </Link>
      </div>
    </header>
  );
}