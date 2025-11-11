"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { liVariants, tooltipVariants } from "../data/variants";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Create audio element
    const audio = new Audio('/music/background.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    
    // Add event listeners
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    
    audioRef.current = audio;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', handlePlay);
        audioRef.current.removeEventListener('pause', handlePause);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current || !mounted) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
      setIsPlaying(false);
    }
  };

  if (!mounted) {
    return (
      <div className="navbar-li w-8 h-8" />
    );
  }

  return (
    <motion.li
      className="navbar-li cursor-pointer"
      initial="rest"
      whileHover="hover"
      variants={liVariants}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      onClick={toggleMusic}
    >
      <motion.span>
        {isPlaying ? (
          <HiVolumeUp className="text-neutral-900 dark:text-neutral-100" style={{ fontSize: '18px' } as React.CSSProperties} />
        ) : (
          <HiVolumeOff className="text-neutral-900 dark:text-neutral-100" style={{ fontSize: '18px' } as React.CSSProperties} />
        )}
        <motion.span
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-1 bg-neutral-900 dark:bg-white text-neutral-100 dark:text-neutral-900 text-xs rounded-md whitespace-nowrap"
          variants={tooltipVariants}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? 'Mute' : 'Music'}
        </motion.span>
      </motion.span>
    </motion.li>
  );
}