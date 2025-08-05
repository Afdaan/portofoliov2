"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

const Loader = ({ isLoading, onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const [currentAlyaImage, setCurrentAlyaImage] = useState(1);

  useEffect(() => {
    // Cute loading messages with Alya theme - defined inside useEffect to avoid dependency issues
    const loadingMessages = [
      'Alya is preparing everything...',
      'Loading with love from Alya...',
      'Almost ready, thanks for waiting!',
      'Alya is working her magic...',
      'Just a moment more!'
    ];

    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    }, 1500);

    return () => clearInterval(messageInterval);
  }, []);

  // Alya images array (alya1.jpg to alya5.jpg)
  const alyaImages = [
    '/images/alya1.jpg',
    '/images/alya2.jpg', 
    '/images/alya3.jpg',
    '/images/alya4.jpg',
    '/images/alya5.jpg'
  ];

  useEffect(() => {
    // Cycle through Alya images more frequently for smooth transition
    const imageInterval = setInterval(() => {
      setCurrentAlyaImage(prev => (prev % 5) + 1);
    }, 800); // Change image every 800ms

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    if (isLoading) {
      // Much faster progress for mobile
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      const progressStep = isMobile ? 20 : 10; // Faster steps on mobile
      const progressInterval = isMobile ? 50 : 100; // Faster interval on mobile
      
      const progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            // Minimal completion delay
            setTimeout(() => onComplete?.(), isMobile ? 100 : 200);
            return 100;
          }
          return prev + progressStep;
        });
      }, progressInterval);

      return () => {
        clearInterval(progressTimer);
      };
    } else if (!isLoading) {
      setProgress(0);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Simple backdrop - no blur on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-background/95 md:backdrop-blur-sm"
          />

          {/* Minimal loader */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-6"
          >
            {/* Mobile-optimized CSS */}
            <style jsx>{`
              @media (max-width: 768px) {
                /* Disable heavy animations on mobile */
                .mobile-light * {
                  animation-duration: 0.5s !important;
                  transition-duration: 0.2s !important;
                }
              }
              
              /* Force circular shape for all images */
              .alya-avatar {
                width: 80px !important;
                height: 80px !important;
                border-radius: 50% !important;
                overflow: hidden !important;
                position: relative !important;
              }
              
              .alya-avatar img {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                object-position: center !important;
                border-radius: 50% !important;
                display: block !important;
              }
            `}</style>

            <div className="text-center mobile-light">
              {/* Alya Avatar with image transition animation */}
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 relative alya-avatar"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden'
                  }}
                  animate={{ 
                    scale: typeof window !== 'undefined' && window.innerWidth <= 768 
                      ? [1, 1.02, 1] // Lighter animation for mobile
                      : [1, 1.05, 1], // Full animation for desktop
                    rotate: typeof window !== 'undefined' && window.innerWidth <= 768 
                      ? [0, 2, -2, 0] // Smaller rotation for mobile
                      : [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: typeof window !== 'undefined' && window.innerWidth <= 768 ? 1.5 : 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Transitioning Alya images */}
                  <motion.img
                    key={currentAlyaImage}
                    src={alyaImages[currentAlyaImage - 1]}
                    alt={`Alya Loading ${currentAlyaImage}`}
                    className="w-full h-full object-cover object-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ 
                      duration: typeof window !== 'undefined' && window.innerWidth <= 768 ? 0.3 : 0.5,
                      ease: "easeInOut"
                    }}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '50%',
                      imageRendering: 'auto',
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  />
                </motion.div>
                
                {/* Light ring animation around avatar - disabled on mobile */}
                {typeof window !== 'undefined' && window.innerWidth > 768 && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/50"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                )}
              </div>

              {/* Loading text with animation */}
              <motion.h2 
                className="text-xl font-bold mb-4"
                key={loadingMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {loadingMessage}
              </motion.h2>

              {/* Enhanced progress bar with Alya theme */}
              <div className="w-64 h-2 bg-muted rounded-full mx-auto mb-2 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Shimmer effect - lighter on mobile */}
                  {(typeof window === 'undefined' || window.innerWidth > 768) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Progress percentage with cute styling */}
              <motion.p 
                className="text-sm text-muted-foreground"
                animate={{ scale: progress === 100 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {progress === 100 ? '✨ Ready! ✨' : `${Math.round(progress)}%`}
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Loader;
