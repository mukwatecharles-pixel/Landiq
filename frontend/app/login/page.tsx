'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://landiq-7fqf.onrender.com';
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in');
      }

      // Save token/user and redirect to dashboard (or client portal)
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-black tracking-wider text-emerald-400">LANDIQ</span>
          </Link>
          <h1 className="text-xl font-bold mt-2">Client Portal Login</h1>
          <p className="text-xs text-slate-400 mt-1">Access verified titles, escrow accounts, and deeds.</p>
        </div>

        {error && (
          <div className="mb-4 bg-red-950 border border-red-800 text-red-400 text-xs p-3 rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com" 
              required
              className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required
              className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition mt-2 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In to Portal'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400 space-y-2">
          <p>Don't have an account? <Link href="/signup" className="text-emerald-400 hover:underline font-semibold">Sign Up</Link></p>
          <div>
            <Link href="/" className="hover:text-emerald-400 transition">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}