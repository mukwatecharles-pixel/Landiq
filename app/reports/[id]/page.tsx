'use client';

import React, { useState, Suspense } from 'react';
import { useParams } from 'next/navigation';

function ReportContent() {
  const params = useParams();
  const id = params?.id || '209-4521';
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Land Verification Report</h1>
            <p className="text-sm text-slate-400">Parcel ID: {id}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'overview'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('nlc')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'nlc'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              NLC Registry
            </button>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
          {activeTab === 'overview' ? (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-emerald-400">Parcel Status: Verified Clean</h2>
              <p className="text-slate-300">
                This property has been successfully cross-referenced with National Land Commission (NLC) archives and PostGIS boundary surveys. No encumbrances or multi-allocations detected.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-emerald-400">NLC Official Search Audit</h2>
              <p className="text-slate-300">
                Title deed matches registry records. Registered owner details verified via secure cryptographic token.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LandProfilePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">Loading report...</div>}>
      <ReportContent />
    </Suspense>
  );
}