"use client"

import { useState } from "react"
import { Play, Clock, Lock } from "lucide-react"
import { VideoGate } from "./video-gate"

export function VSLVideo() {
  const [emailCaptured, setEmailCaptured] = useState(false)
  const [showGate, setShowGate] = useState(false)

  const handleEmailCaptured = (email: string, name: string) => {
    setEmailCaptured(true)
    setShowGate(false)
    
    // Trigger PDF download
    window.open(`/api/download-pdf?type=3-blocks&email=${encodeURIComponent(email)}`, '_blank')
  }

  const handlePlayClick = () => {
    if (!emailCaptured) {
      setShowGate(true)
    }
    // If email is already captured, video would play (when you add the actual video)
  }

  return (
    <>
      {showGate && (
        <VideoGate 
          onEmailCaptured={handleEmailCaptured} 
          onClose={() => setShowGate(false)}
          pdfName="The 3 Blocks Keeping You Stuck" 
        />
      )}
      
      <section id="vsl-video" className="py-16 sm:py-24 bg-[#141b27]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Video caption */}
          <div className="flex items-center justify-center gap-2 mb-8 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">15 minutes</span>
            <span className="text-gray-600 mx-2">•</span>
            <span className="text-sm">Free training + bonus PDF download</span>
          </div>

          {/* Video container with golden border */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[#d4a574]/30 cursor-pointer group"
            onClick={handlePlayClick}
          >
            {/* Aspect ratio wrapper */}
            <div className="aspect-video bg-gradient-to-br from-[#1a2332] to-[#0f141c] flex items-center justify-center relative">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                {/* Play button */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#d4a574] flex items-center justify-center shadow-xl shadow-[#d4a574]/30 group-hover:scale-110 transition-transform mb-6">
                  {emailCaptured ? (
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#1a2332] ml-1" fill="currentColor" />
                  ) : (
                    <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-[#1a2332]" />
                  )}
                </div>

                {/* Text based on state */}
                <p className="text-white text-base sm:text-lg font-medium max-w-md mb-2">
                  {emailCaptured 
                    ? "Click to play the training"
                    : "Click to unlock the free training"
                  }
                </p>
                <p className="text-gray-400 text-sm max-w-sm">
                  {emailCaptured 
                    ? "[Your Vimeo video will appear here]"
                    : "Enter your email to get instant access + a free PDF guide"
                  }
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">00:00 / 15:00</div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/50 to-transparent pointer-events-none" />
            </div>

            {/* Progress bar placeholder */}
            <div className="h-1 bg-[#2d2d2d]">
              <div className="h-full w-0 bg-[#d4a574]" />
            </div>
          </div>

          {/* Video controls hint */}
          <p className="text-center text-gray-500 text-xs mt-4">
            {emailCaptured ? "Click to play • Best viewed with sound on" : "Click the video above to get started"}
          </p>
        </div>
      </section>
    </>
  )
}
