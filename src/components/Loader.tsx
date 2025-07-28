"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

interface LoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

const Loader = ({ isLoading, onComplete }: LoaderProps) => {
  const [currentExpression, setCurrentExpression] = useState(1);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { loader } = portfolioConfig;

  // Generate expressions array based on config
  const expressions = useMemo(() => 
    Array.from({ length: loader.characterImages.totalExpressions }, (_, i) => i + 1), 
    [loader.characterImages.totalExpressions]
  );

  // Preload all character images using config
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = expressions.map((expr) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = `${loader.characterImages.basePath}${expr}${loader.characterImages.fileExtension}`;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, [expressions, loader]);

  useEffect(() => {
    if (isLoading && imagesLoaded) {
      // Change expression based on config timing
      const expressionTimer = setInterval(() => {
        setCurrentExpression((prev) => {
          const nextIndex = (expressions.indexOf(prev) + 1) % expressions.length;
          return expressions[nextIndex];
        });
      }, loader.timing.expressionChange);

      // Faster progress animation using config
      const progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            // Configurable completion delay
            setTimeout(() => onComplete?.(), loader.timing.completionDelay);
            return 100;
          }
          return prev + loader.timing.progressStep;
        });
      }, loader.timing.progressInterval);

      return () => {
        clearInterval(expressionTimer);
        clearInterval(progressTimer);
      };
    } else if (!isLoading) {
      // Reset state when not loading
      setCurrentExpression(1);
      setProgress(0);
    }
  }, [isLoading, imagesLoaded, onComplete, expressions, loader]);

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Modern backdrop with subtle gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md"
          />

          {/* Main loader container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-6"
          >
            {/* Glass morphism card */}
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, #f59e0b, #3b82f6, #8b5cf6, #f59e0b)",
                    "linear-gradient(135deg, #3b82f6, #8b5cf6, #f59e0b, #3b82f6)",
                    "linear-gradient(225deg, #8b5cf6, #f59e0b, #3b82f6, #8b5cf6)",
                    "linear-gradient(315deg, #f59e0b, #3b82f6, #8b5cf6, #f59e0b)",
                  ],
                }}
                transition={{ duration: loader.animations.borderGradient, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-3xl opacity-75 blur-sm"
              />

              {/* Main glass card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl min-w-[300px]">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl" />

                <div className="relative z-10 text-center">
                  {/* Character avatar with modern styling */}
                  {imagesLoaded ? (
                    <motion.div
                      key={currentExpression}
                      initial={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                      exit={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                      className="w-28 h-28 mx-auto mb-8 relative"
                    >
                      {/* Animated ring around avatar */}
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          rotate: { duration: loader.animations.avatarRing, repeat: Infinity, ease: "linear" },
                          scale: { duration: loader.animations.avatarScale, repeat: Infinity },
                        }}
                        className="absolute -inset-2 bg-gradient-to-r from-amber-400/40 via-blue-500/40 to-purple-500/40 rounded-full blur-md"
                      />

                      {/* Character image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white/30 shadow-xl bg-gradient-to-br from-white/10 to-white/5">
                        <Image
                          src={`${loader.characterImages.basePath}${currentExpression}${loader.characterImages.fileExtension}`}
                          alt={`Character Expression ${currentExpression}`}
                          width={112}
                          height={112}
                          className="object-cover w-full h-full transition-all duration-500 hover:scale-110"
                          priority
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-28 h-28 mx-auto mb-8 relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/40 via-blue-500/40 to-purple-500/40 rounded-full blur-md animate-pulse" />
                      <div className="relative w-full h-full rounded-full border-3 border-white/30 bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: loader.animations.loadingSpinner, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* Modern loading text */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: loader.animations.textGradient, repeat: Infinity }}
                    className="bg-gradient-to-r from-amber-400 via-blue-500 to-purple-500 bg-[length:200%_100%] bg-clip-text text-transparent"
                  >
                    <h3 className="text-2xl font-bold mb-2">{loader.title}</h3>
                  </motion.div>

                  <motion.p
                    key={imagesLoaded ? "loaded" : "loading"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-white/70 mb-8"
                  >
                    {imagesLoaded ? loader.preparedText : loader.loadingText}
                  </motion.p>

                  {/* Modern progress bar */}
                  <div className="relative mb-6">
                    <div className="w-72 h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${imagesLoaded ? progress : 0}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-400 via-blue-500 to-purple-500 rounded-full relative overflow-hidden"
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: loader.animations.progressShine, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                        />
                      </motion.div>
                    </div>

                    {/* Progress percentage */}
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-white/50 font-medium">{loader.progressLabel}</span>
                      <motion.span
                        key={Math.floor(progress / 10)}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-sm font-bold text-white"
                      >
                        {Math.round(imagesLoaded ? progress : 0)}%
                      </motion.span>
                    </div>
                  </div>

                  {/* Expression indicators - only show when loaded */}
                  {imagesLoaded && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-center gap-2"
                    >
                      {expressions.map((expr) => (
                        <motion.div
                          key={expr}
                          animate={{
                            scale: expr === currentExpression ? 1.2 : 1,
                            opacity: expr === currentExpression ? 1 : 0.4,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            expr === currentExpression
                              ? "bg-gradient-to-r from-amber-400 to-purple-500 shadow-lg"
                              : "bg-white/30"
                          }`}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Loader;
