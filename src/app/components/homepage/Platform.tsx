"use client";

import { Network, ShieldCheck } from "lucide-react";
import { Guilloche } from "@/components/guilloche/Guilloche";
import FadeIn from "@/components/animations/FadeIn";

export default function Platform() {
  return (
    <section id="platform" className="py-36 px-4 bg-white text-forest overflow-hidden relative">
      {/* Background: Digital Infrastructure via Security Printing Metaphor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.03] animate-spin-slow"
          style={{ animationDuration: "120s" }}
        >
          <Guilloche color="#122C18" type="rosette" />
        </div>

        <div className="absolute top-[8%] left-0 w-full h-16 opacity-[0.08]">
          <Guilloche type="security-strip" color="#122C18" opacity={1} />
        </div>
        <div className="absolute bottom-[8%] left-0 w-full h-16 opacity-[0.08]">
          <Guilloche type="security-strip" color="#122C18" opacity={1} />
        </div>

        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <Guilloche color="#122C18" type="wave" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn>
            <span className="kicker text-dark-gold">
              The Platform
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 tracking-tight leading-none">
              Human Judgment,
              <br />
              <span className="text-dark-gold italic">Machine Precision.</span>
            </h2>
            <p className="text-forest/70 leading-relaxed mb-8">
              Developed at our engineering hubs in{" "}
              <span className="text-forest font-medium border-b border-dark-gold/30">
                San Francisco
              </span>{" "}
              and{" "}
              <span className="text-forest font-medium border-b border-dark-gold/30">
                Singapore
              </span>
              , the "Multiplier OS" handles the ingestion, categorization, and
              preliminary analysis of complex cross-border documentation,
              allowing our firm staff to focus on delivering exceptional service to our clients.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center shrink-0 bg-forest/5">
                  <Network className="text-forest" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1 text-forest">
                    Contextual Awareness
                  </h4>
                  <p className="text-sm text-forest/60">
                    AI that understands the nuances of cross-border tax and compliance documentation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center shrink-0 bg-forest/5">
                  <ShieldCheck className="text-forest" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1 text-forest">
                    Institutional Security
                  </h4>
                  <p className="text-sm text-forest/60">
                    Enterprise-grade security with the careful attention your clients expect.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative min-w-0">
              {/* AI Extraction Popout Card - Modern floating card */}
              <div className="absolute -left-4 lg:left-0 bottom-24 lg:bottom-32 w-[calc(100%-1rem)] sm:w-80 lg:w-96 bg-gradient-to-br from-white to-cream/80 backdrop-blur-sm rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] z-20 border border-forest/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-gold/[0.02] to-transparent pointer-events-none"></div>
                <div className="p-5 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                    <Guilloche color="#122C18" type="rosette" />
                  </div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-11 h-11 bg-gradient-to-br from-dark-gold to-dark-gold/80 rounded-md flex items-center justify-center shrink-0 shadow-lg shadow-dark-gold/20">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-forest mb-1.5">AI Extraction Complete</p>
                      <p className="text-xs text-forest/60 leading-relaxed mb-3">
                        Personal details, SSN, and address automatically extracted from W-2 attachment and filled into the tax form.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-2 bg-forest/5 flex-1 rounded overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-dark-gold to-dark-gold/80 w-[99%] rounded"></div>
                        </div>
                        <span className="text-xs font-semibold text-dark-gold">99.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Form UI Card - Modern design */}
              <div className="relative bg-white rounded-lg shadow-[0_25px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden ml-0 lg:ml-16 border border-forest/5">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream/30 via-transparent to-dark-gold/[0.02] pointer-events-none"></div>

                {/* Header */}
                <div className="relative bg-gradient-to-r from-forest to-forest/95 px-5 sm:px-6 py-4 sm:py-5">
                  <div className="absolute inset-0 opacity-10">
                    <Guilloche color="#ffffff" type="wave" />
                  </div>
                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <div className="min-w-0">
                      <h3 className="font-serif text-base sm:text-lg text-white truncate">Form 1040 - 2024</h3>
                      <p className="text-[10px] sm:text-xs text-white/50 font-mono">US Individual Income Tax Return</p>
                    </div>
                    <div className="shrink-0">
                      <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-dark-gold bg-white/10 backdrop-blur-sm px-2.5 py-1.5 rounded flex items-center gap-2 border border-white/10">
                        <div className="w-1.5 h-1.5 bg-dark-gold rounded-full animate-pulse"></div>
                        <span className="hidden sm:inline">AI Processing</span>
                        <span className="sm:hidden">AI</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-5 sm:p-6 space-y-5 relative">
                  {/* Primary Taxpayer */}
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-forest/50 mb-2.5 block">
                      Primary Taxpayer
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative group">
                        <input
                          type="text"
                          value="Young"
                          readOnly
                          className="w-full px-4 py-3 bg-gradient-to-r from-cream/60 to-cream/40 border border-forest/8 text-sm text-forest rounded-md transition-all duration-200 group-hover:border-dark-gold/30 group-hover:shadow-sm"
                        />
                        {/* AI Extraction Indicator */}
                        <div className="absolute -right-1 -top-1 w-5 h-5 bg-gradient-to-br from-dark-gold to-dark-gold/80 rounded-full flex items-center justify-center shadow-lg shadow-dark-gold/30 ring-2 ring-white">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          value="Nicholas"
                          readOnly
                          className="w-full px-4 py-3 bg-gradient-to-r from-cream/60 to-cream/40 border border-forest/8 text-sm text-forest rounded-md transition-all duration-200 group-hover:border-dark-gold/30 group-hover:shadow-sm"
                        />
                        <div className="absolute -right-1 -top-1 w-5 h-5 bg-gradient-to-br from-dark-gold to-dark-gold/80 rounded-full flex items-center justify-center shadow-lg shadow-dark-gold/30 ring-2 ring-white">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SSN */}
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-forest/50 mb-2.5 block">
                      Social Security Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="987-65-4321"
                        readOnly
                        className="w-full px-4 py-3 bg-gradient-to-r from-cream/60 to-cream/40 border border-forest/8 text-sm font-mono text-forest rounded-md transition-all duration-200 group-hover:border-dark-gold/30 group-hover:shadow-sm"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-dark-gold to-dark-gold/80 rounded-full flex items-center justify-center shadow-lg shadow-dark-gold/30">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-forest/50 mb-2.5 block">
                      Address
                    </label>
                    <input
                      type="text"
                      value="456 Oak St, San Francisco, CA 12345"
                      readOnly
                      className="w-full px-4 py-3 bg-gradient-to-r from-cream/60 to-cream/40 border border-forest/8 text-sm text-forest rounded-md transition-all duration-200 group-hover:border-dark-gold/30 group-hover:shadow-sm"
                    />
                  </div>

                  {/* Attachments Section */}
                  <div className="relative pt-5 mt-2">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/10 to-transparent"></div>

                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-forest/50">Attachments</p>
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-dark-gold flex items-center gap-1.5 bg-dark-gold/5 px-2.5 py-1 rounded">
                        <div className="w-1.5 h-1.5 bg-dark-gold rounded-full animate-pulse"></div>
                        AI Scanning
                      </span>
                    </div>

                    {/* File attachment card */}
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cream/80 to-cream/50 rounded-md border border-forest/5 hover:border-dark-gold/20 transition-all duration-200 hover:shadow-md group/file">
                      <div className="w-10 h-10 bg-gradient-to-br from-dark-gold/10 to-dark-gold/5 rounded-md flex items-center justify-center shrink-0 group-hover/file:from-dark-gold/15 group-hover/file:to-dark-gold/10 transition-all duration-200">
                        <svg className="w-5 h-5 text-dark-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-forest truncate">W-2_Nicholas_Young.pdf</p>
                        <p className="text-[11px] text-forest/40">142 KB • Processed</p>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-100 shrink-0">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative accent line at bottom */}
                <div className="h-1 bg-gradient-to-r from-dark-gold via-dark-gold/60 to-transparent"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
