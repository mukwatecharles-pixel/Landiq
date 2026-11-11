'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulating a successful registration response
      setTimeout(() => {
        setLoading(false);
        router.push('/seller-dashboard');
      }, 1000);
    } catch (err: any) {
      setLoading(false);
      setError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans py-10 px-6 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-2">
            <span className="text-xl font-black tracking-wider text-emerald-400">LANDIQ</span>
          </Link>
          <h1 className="text-xl font-bold text-white">Create Client Account</h1>
          <p className="text-xs text-slate-400 mt-1">Register to start verifying titles and managing escrow.</p>
        </div>

        {error && (
          <div className="mb-4 bg-red-950/80 border border-red-800 text-red-300 text-xs p-3 rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Full Name *</label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Mary Wanjiku" 
              required
              className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Email Address *</label>
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
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Password *</label>
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
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400 space-y-2">
          <p>Already have an account? <Link href="/login" className="text-emerald-400 font-semibold hover:underline">Sign In</Link></p>
          <div>
            <Link href="/" className="text-slate-500 hover:text-slate-300 transition">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}