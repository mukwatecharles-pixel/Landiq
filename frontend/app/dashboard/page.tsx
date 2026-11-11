'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function MasterDashboardHub() {
  const sections = [
    {
      title: 'Core Marketplace & Search',
      items: [
        { name: 'Explore Land Search', href: '/search', desc: 'Browse verified parcels with interactive filters' },
        { name: 'List Land Wizard', href: '/list-land', desc: 'Submit title deeds & trigger NLC registry checks' },
        { name: 'AI Valuation & LandScore', href: '/#valuation', desc: 'Inspect predictive pricing and risk factors' },
      ]
    },
    {
      title: 'Dashboards & Portals',
      items: [
        { name: 'Seller Dashboard', href: '/seller-dashboard', desc: 'Manage active listings, offers, and analytics' },
        { name: 'Admin Dashboard', href: '/admin', desc: 'Superuser controls, fraud queues, and system uptime' },
        { name: 'User Profile & Settings', href: '/profile', desc: 'KYC status, 2FA security, and account preferences' },
      ]
    },
    {
      title: 'Transactions & Legal',
      items: [
        { name: 'Secure Escrow & M-Pesa', href: '/escrow/209-4521', desc: 'Milestone-based deposits and disbursement' },
        { name: 'Dispute Portal & Arbitration', href: '/dispute', desc: 'Tier-1 mediation and evidence management' },
        { name: 'Notifications Centre', href: '/notifications', desc: 'Push alerts and SMS backup histories' },
      ]
    },
    {
      title: 'Offline & Access Tools',
      items: [
        { name: 'USSD Simulator (*384#)', href: '/ussd', desc: 'Feature-phone offline title verification menu' },
        { name: 'Client Portal Login', href: '/login', desc: 'Secure authentication gateway' },
        { name: 'Registration Portal', href: '/signup', desc: 'New account onboarding' },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-12 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Master Navigation Hub</span>
          <h1 className="text-3xl font-black text-white mt-1">LandIQ Control Center</h1>
          <p className="text-xs text-slate-400 mt-1">Direct access to all 18 mockups, dashboards, and operational modules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl">
              <h2 className="font-bold text-sm text-emerald-400 uppercase tracking-wide">{section.title}</h2>
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href}
                    className="block bg-slate-950 hover:bg-slate-800/80 border border-slate-800/80 p-4 rounded-xl transition group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white group-hover:text-emerald-400 transition">{item.name}</span>
                      <span className="text-xs text-slate-500 group-hover:text-emerald-400">&rarr;</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}