'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

/**
 * Video Tooltip - Contextual help for MYPEs
 * Shows helpful videos exactly when needed
 * Simple controls, auto-play option
 */

interface VideoTooltipProps {
  readonly title: string;
  readonly description: string;
  readonly videoUrl: string;
  readonly thumbnail?: string;
  readonly autoPlay?: boolean;
  readonly trigger: React.ReactNode;
}

const VideoTooltip: React.FC<VideoTooltipProps> = ({
  title,
  description,
  videoUrl,
  thumbnail,
  autoPlay = false,
  trigger
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Trigger Element */}
      <div onClick={handleOpen} className="cursor-pointer">
        {trigger}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-75"
              onClick={handleClose}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full mx-4"
            >
              {/* Header */}
              <div className="p-4 lg:p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg lg:text-xl font-bold mb-1">{title}</h3>
                    <p className="text-sm lg:text-base opacity-90">{description}</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 p-2 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Cerrar video"
                  >
                    <X className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative bg-black">
                {!isPlaying && thumbnail ? (
                  <div className="relative aspect-video">
                    <img 
                      src={thumbnail} 
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-colors"
                    >
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 lg:w-10 lg:h-10 text-gray-900 ml-1" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="aspect-video">
                    <video
                      className="w-full h-full"
                      controls
                      autoPlay={isPlaying}
                      muted={isMuted}
                      playsInline
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Tu navegador no soporta el elemento video.
                    </video>
                  </div>
                )}

                {/* Video Controls Overlay */}
                {isPlaying && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-colors"
                      aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 lg:p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Entendido
                  </button>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Ver de nuevo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(VideoTooltip);
