import React, { useRef, useState, useEffect } from "react";
import songs from "../data/Data"; // adjust path if needed

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentIndex];

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Next song
  const playNext = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 100);
  };

  // Previous song
  const playPrev = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 100);
  };

  // Track progress
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };

  // Seek when dragging slider
  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  // Reset progress when changing song
  useEffect(() => {
    setProgress(0);
    setDuration(0);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-md w-80">
      {/* Song Image */}
      <img
        src={currentSong.image}
        alt={currentSong.title}
        className="w-40 h-40 rounded-lg object-cover mb-4"
      />

      {/* Song Info */}
      <h3 className="text-lg font-semibold">{currentSong.title}</h3>
      <p className="text-sm text-zinc-500">{currentSong.artist}</p>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />

      {/* Progress bar */}
      <div className="w-full mt-4">
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="w-full accent-white"
        />
        <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-4">
        <button onClick={playPrev} aria-label="Previous">⏮</button>
        <button onClick={togglePlay} aria-label="Play/Pause">
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={playNext} aria-label="Next">⏭</button>
      </div>
    </div>
  );
}

// Utility: format seconds into mm:ss
function formatTime(time) {
  if (!time || isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
