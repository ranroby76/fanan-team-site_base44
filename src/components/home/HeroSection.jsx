import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative w-full">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/465a40858_SITETOP.png" 
          alt="Welcome to fanan"
          className="w-full h-auto"
        />
      </div>

      {/* Notice Boxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-700/50 rounded-lg p-4 text-center">
            <p className="text-yellow-200 font-medium">
              New to fanan team? Please, always read the "how to buy?" instructions before purchasing
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-700/50 rounded-lg p-4 text-center">
            <p className="text-yellow-200">
              New folks, please, Always try the demo first before purchasing. Never buy before first testing a demo on your system
            </p>
          </div>

          {/* Sales Banner */}
          <div className="bg-gradient-to-r from-lime-200 via-yellow-100 to-lime-200 border-2 border-amber-900/30 rounded-lg py-6 px-4 mt-6">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="text-center flex-shrink-0">
                <div className="text-5xl sm:text-6xl font-black text-red-800" style={{ fontFamily: 'Impact, sans-serif' }}>
                  60%
                </div>
                <div className="text-sm font-semibold text-red-800 -mt-1">OFF</div>
              </div>
              
              <div className="flex-1 text-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.05em' }}>
                  WE BELIEVE EVERY SEASON IS SALES SEASON
                </h2>
              </div>
              
              <div className="text-center flex-shrink-0">
                <div className="text-5xl sm:text-6xl font-black text-red-800" style={{ fontFamily: 'Impact, sans-serif' }}>
                  60%
                </div>
                <div className="text-sm font-semibold text-red-800 -mt-1">OFF</div>
              </div>
            </div>
          </div>

          {/* Playlisted Banner */}
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border border-slate-700 rounded-lg p-8 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693af3db20c38c22bc69519e/54cfef7fa_intruduceonfanansite.jpg"
                  alt="Playlisted Interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="text-yellow-400">Playlisted Goes Online!</span>
                  <span className="ml-2 text-yellow-400">🎵</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The external, video supporting version of our beloved VSTi.
                  <br /><br />
                  Discover the new online version of Playlisted! Build smart channels/projects from your favorite tracks with video support, and communicate directly with your audio interface's drivers for a seamless experience.
                </p>
                <a 
                  href="https://studio--playlisted-store.us-central1.hosted.app/player"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Visit Playlisted
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}