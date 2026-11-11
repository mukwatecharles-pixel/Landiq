'new client';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UssdPage() {
  const [screen, setScreen] = useState('home');
  const [input, setInput] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  const handleDial = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === '1') {
      setScreen('verify_title');
    } else if (input === '2') {
      setScreen('escrow_status');
    } else {
      setResponseMsg('Invalid option. Please enter 1 or 2.');
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setScreen('result');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans py-10 px-6 flex flex-col justify-center items-center">
      <div className="max-w-sm w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Phone Notch / Header */}
        <div className="text-center pb-6 border-b border-slate-800 mb-6">
          <Link href="/" className="inline-block mb-1">
            <span className="text-xs font-semibold text-emerald-400">&larr; Exit USSD Simulator</span>
          </Link>
          <h1 className="text-xl font-black tracking-widest text-emerald-400">USSD *384#</h1>
          <p className="text-[10px] text-slate-400 mt-0.5">Feature-Phone Offline Gateway</p>
        </div>

        {/* USSD Modal Screen */}
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl font-mono text-xs text-emerald-400 space-y-4 min-h-[180px] flex flex-col justify-between shadow-inner">
          <div>
            {screen === 'home' && (
              <div className="space-y-2">
                <p className="text-slate-300 font-bold">Welcome to LANDIQ</p>
                <p>1. Verify Title Deed</p>
                <p>2. Check Escrow Status</p>
                {responseMsg && <p className="text-red-400 mt-2">{responseMsg}</p>}
              </div>
            )}

            {screen === 'verify_title' && (
              <div className="space-y-2">
                <p className="text-slate-300 font-bold">Enter Title / Plot Number:</p>
                <p className="text-slate-500">e.g. LR-209-4521</p>
              </div>
            )}

            {screen === 'escrow_status' && (
              <div className="space-y-2">
                <p className="text-slate-300 font-bold">Escrow Account Status:</p>
                <p className="text-slate-200 mt-1">TXN #4047: KES 310,000 Secured in M-Pesa Escrow.</p>
              </div>
            )}

            {screen === 'result' && (
              <div className="space-y-2">
                <p className="text-white font-bold">✓ VERIFIED BY NLC</p>
                <p className="text-emerald-300">Owner: John Mwangi</p>
                <p className="text-emerald-300">Status: Clean Freehold</p>
              </div>
            )}
          </div>

          {/* Input Form */}
          <div>
            {screen === 'home' && (
              <form onSubmit={handleDial} className="flex gap-2 pt-3 border-t border-slate-900">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Reply (1-2)" 
                  maxLength={1}
                  className="w-full bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500"
                />
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold">Send</button>
              </form>
            )}

            {screen === 'verify_title' && (
              <form onSubmit={handleVerify} className="flex gap-2 pt-3 border-t border-slate-900">
                <input 
                  type="text" 
                  placeholder="Enter Plot No..." 
                  required
                  className="w-full bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500"
                />
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold">Check</button>
              </form>
            )}

            {(screen === 'escrow_status' || screen === 'result') && (
              <button 
                onClick={() => { setScreen('home'); setInput(''); }}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-center font-bold"
              >
                Back to Main Menu
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}