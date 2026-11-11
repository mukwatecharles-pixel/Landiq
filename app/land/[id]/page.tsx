import React from 'react';

export default function LandDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Verified Title • NLC Verified
            </span>
            <h1 className="text-3xl font-extrabold mt-2">LR No. 209/4521 — Kiambu Sub-County</h1>
            <p className="text-slate-400 text-sm">Parcel ID: {params.id} • Registered Owner: Confirmed Valid</p>
          </div>
          <a href="/" className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-lg transition border border-slate-700">
            ← Back to Search
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details & PostGIS Boundary Placeholder */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* GIS Interactive Boundary Map View */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl h-80 flex flex-col justify-between p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-950/20 flex items-center justify-center">
                <span className="text-slate-500 font-mono text-sm">[ PostGIS Boundary Polygon & Satellite GIS Map View ]</span>
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-slate-950/80 text-xs text-emerald-400 font-mono px-3 py-1.5 rounded-lg border border-slate-800">
                  GPS Coordinates: -1.1742, 36.9312
                </span>
                <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg">
                  0.50 Acres
                </span>
              </div>
            </div>

            {/* AI LandScore 7-Dimension Breakdown */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold">LandScore™ Diagnostic Index</h3>
                <span className="text-2xl font-black text-emerald-400 bg-emerald-950 px-4 py-1 rounded-xl border border-emerald-800">
                  82 / 100
                </span>
              </div>

              {/* 7 Dimensions Bar Chart */}
              <div className="space-y-3 pt-2 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Ownership Clarity & Registry Match (25%)</span>
                    <span className="text-emerald-400 font-bold">95/100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Legal Cleanliness & Encumbrances (20%)</span>
                    <span className="text-emerald-400 font-bold">90/100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Infrastructure & Utility Access (20%)</span>
                    <span className="text-amber-400 font-bold">70/100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Climate & Topography Risks (15%)</span>
                    <span className="text-emerald-400 font-bold">85/100</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & M-Pesa Escrow Action Sidebar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Asking Price</span>
              <div className="text-3xl font-black text-emerald-400 mt-1">KES 3,200,000</div>
              
              <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>AI Valuation Range:</span>
                  <span className="text-slate-200 font-bold">KES 3.0M - 3.4M</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>10% Escrow Deposit:</span>
                  <span className="text-emerald-400 font-bold">KES 320,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition text-sm shadow-lg shadow-emerald-950">
                Initiate M-Pesa Escrow Deposit
              </button>
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl transition text-sm border border-slate-700">
                Download Official NLC Title Audit PDF
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}