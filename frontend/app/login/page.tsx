import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-black tracking-wider text-emerald-400">LANDIQ</span>
          </Link>
          <h1 className="text-xl font-bold mt-2">Client Portal Login</h1>
          <p className="text-xs text-slate-400 mt-1">Access verified titles, escrow accounts, and deeds.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition mt-2"
          >
            Sign In to Portal
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-400 transition">&larr; Back to Home</Link>
        </div>
      </div>
    </main>
  );
}