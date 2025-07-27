/**
 * useSound Hook - Audio management for UI interactions
 * Optimized for performance and user experience
 */

import { useCallback, useRef, useEffect } from 'react';

interface UseSoundOptions {
  volume?: number;
  playbackRate?: number;
  preload?: boolean;
}

interface SoundControls {
  play: () => Promise<void>;
  pause: () => void;
  stop: () => void;
  setVolume: (volume: number) => void;
  isPlaying: boolean;
}

/**
 * Custom hook for managing audio playback
 * Provides simple interface for playing UI sounds
 */
export const useSound = (
  src: string,
  options: UseSoundOptions = {}
): SoundControls => {
  const {
    volume = 0.5,
    playbackRate = 1,
    preload = true,
  } = options;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  // Initialize audio element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.playbackRate = playbackRate;
      audio.preload = preload ? 'auto' : 'none';
      
      // Handle audio events
      audio.addEventListener('ended', () => {
        isPlayingRef.current = false;
      });
      
      audio.addEventListener('pause', () => {
        isPlayingRef.current = false;
      });
      
      audio.addEventListener('play', () => {
        isPlayingRef.current = true;
      });

      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, volume, playbackRate, preload]);

  const play = useCallback(async (): Promise<void> => {
    if (audioRef.current && !isPlayingRef.current) {
      try {
        // Reset audio to beginning
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        console.warn('Unable to play sound:', error);
      }
    }
  }, []);

  const pause = useCallback((): void => {
    if (audioRef.current && isPlayingRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const stop = useCallback((): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const setVolume = useCallback((newVolume: number): void => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
    }
  }, []);

  return {
    play,
    pause,
    stop,
    setVolume,
    isPlaying: isPlayingRef.current,
  };
};

export default useSound;
