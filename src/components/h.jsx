import React, { useEffect, useMemo, useRef, useState } from "react";
import songs from "../data/Data"; // uses your data source

function formatTime(time) {
  if (!time || isNaN(time)) return "0:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function ThreeDCarouselPlayer() {
  const cellCount = 34;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0); // store index

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % songs.length); // loop to start
  };

  const handlePrev = () => {
    setActiveImage((prev) => (prev - 1 + songs.length) % songs.length); // loop to end
  };
  const handlePrevButton = () => {
    playPrev();
    handlePrev();
  };
  const handleNextButton = () => {
    playNext();
    handleNext();
  };

  // audio state
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // 0–100

  // Build exactly 15 entries from songs, fill placeholders if fewer
  const data = useMemo(() => {
    const base = Array.from({ length: cellCount }, (_, i) => songs[i]).filter(Boolean);
    while (base.length < cellCount) {
      const idx = base.length;
      base.push({
        image: `/assets/img/${idx + 1}.jpg`,
        audio: `/assets/audio/${idx + 1}.mp3`,
        title: `Track ${idx + 1}`,
        artist: ``,
      });
    }
    return base.slice(0, cellCount);
  }, []);

  // Auto orientation (horizontal on desktop/landscape tablet; vertical on mobile/portrait)
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [portrait, setPortrait] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(orientation: portrait)").matches
      : false
  );

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setPortrait(window.matchMedia("(orientation: portrait)").matches);
    };
    onResize();
    window.addEventListener("resize", onResize);
    const mq = window.matchMedia("(orientation: portrait)");
    const onChange = () => onResize();
    mq.addEventListener?.("change", onChange);
    return () => {
      window.removeEventListener("resize", onResize);
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  useEffect(() => {
    const desktop = vw >= 1024;
    const tabletLandscape = vw >= 768 && !portrait;
    setIsHorizontal(desktop || tabletLandscape);
  }, [vw, portrait]);

  // Responsive dims
  const dims = useMemo(() => {
    if (vw < 640) {
      return { sceneW: 220, sceneH: 150, cellW: 200, cellH: 130, scale: 1, margin: "40px auto" };
    }
    if (vw < 1024) {
      return { sceneW: 300, sceneH: 200, cellW: 260, cellH: 170, scale: 1.1, margin: "60px auto" };
    }
    return { sceneW: 360, sceneH: 240, cellW: 320, cellH: 200, scale: 1.25, margin: "80px auto" };
  }, [vw]);

  // Radius/rotation
  const carouselRef = useRef(null);
  const [contSize, setContSize] = useState({ width: dims.sceneW, height: dims.sceneH });

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setContSize({ width: rect.width, height: rect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setContSize({ width: dims.sceneW, height: dims.sceneH });
  }, [dims.sceneW, dims.sceneH]);

  const theta = 360 / cellCount;
  const radius = useMemo(() => {
    const size = isHorizontal ? contSize.width : contSize.height;
    const usable = size || (isHorizontal ? dims.sceneW : dims.sceneH);
    return Math.round((usable / 2) / Math.tan(Math.PI / cellCount));
  }, [contSize, isHorizontal, dims.sceneW, dims.sceneH]);

  const rotateFn = isHorizontal ? "rotateY" : "rotateX";
  const containerTransform = `translateZ(${-radius}px) ${rotateFn}(${-selectedIndex * theta}deg)`;

  const cells = useMemo(() => Array.from({ length: cellCount }, (_, i) => i), []);

  // AUDIO wiring
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  // do NOT reset src/currentTime on play/pause; only reset progress on track change
  useEffect(() => {
    setProgress(0);
  }, [selectedIndex, data]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.play().catch(() => setIsPlaying(false));
    } else {
      a.pause();
    }
  }, [isPlaying, selectedIndex]);

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a) return;
    setProgress(a.currentTime || 0);
    setDuration(a.duration || 0);
  };
  const onLoadedMetadata = () => {
    const a = audioRef.current;
    if (!a) return;
    setDuration(a.duration || 0);
  };

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      a.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };
  const playNext = () => {
    setSelectedIndex((i) => (i + 1) % cellCount);
    setIsPlaying(true);
  };
  const playPrev = () => {
    setSelectedIndex((i) => (i - 1 + cellCount) % cellCount);
    setIsPlaying(true);
  };
  const handleSeek = (e) => {
    const a = audioRef.current;
    if (!a) return;
    const t = Number(e.target.value);
    a.currentTime = t;
    setProgress(t);
  };

  return (
    <div style={{ textAlign: "center", overflow: "hidden" }}>
      {/* 3D Scene */}
      <div
        className="scene border-white sm:border-t-2 sm:border-b-2 mobilePlayer  rounded-lg "
        style={{
          transform: `scale(${dims.scale})  rotate(-10deg)`,
          transformOrigin: "center",
          position: "relative",
          width: dims.sceneW,
          height: dims.sceneH,
          margin: dims.margin,
          perspective: "1000px",
        }}
      >
        <div
          ref={carouselRef}
          className="carousel"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            transform: containerTransform,
            transition: `transform 900ms`,
          }}
          aria-label="3D Carousel"
        >
          {cells.map((i) => {
            const angle = theta * i;
            const cellTransform = `${rotateFn}(${angle}deg) translateZ(${radius}px)`;
            const imgSrc = data[i]?.image;

            return (
              <div
                key={i}
                className="carousel__cell"
                style={{
                  position: "absolute",
                  width: dims.cellW,
                  height: dims.cellH,
                  left: (dims.sceneW - dims.cellW) / 2,
                  top: (dims.sceneH - dims.cellH) / 2,
                  border: "2px solid black",
                  overflow: "hidden",
                  borderRadius: 10,
                  transition: `transform 900ms, opacity 900ms`,
                  transform: cellTransform,
                  opacity: 1,
                  background: "#000",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 40,
                }}
                aria-label={`Slide ${i + 1}`}
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={data[i]?.title || `Slide ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  i + 1
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        preload="none"
        ref={audioRef}
        src={data[selectedIndex].audio}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={playNext}
      />

      {/* styler player */}
      <div className="w-full sm:ml-[-10px] max-w-sm p-4 mx-auto">
        <div
          className="
            sm:w-300 w-70  aud-player 
            relative overflow-hidden rounded-lg transition-transform duration-300 group
            bg-white/20 dark:bg-zinc-900/20
            text-zinc-900 dark:text-white
            backdrop-blur-sm
            p-6 hover:scale-[1.02]
            shadow hover:shadow-lg hover:shadow-indigo-500/20
          "
        >
          {/* Ring */}
          <div className="absolute inset-0 z-0 h-full w-full rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
          {/* Optional glass overlay */}
          <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg glass-effect" />

          {/* Single row: Header → Controls → Progress → Volume */}
          <div className="relative z-10">
            <div className="sm:flex items-center gap-6">
              {/* Header */}
              <div className="sm:flex items-start gap-2 shrink-0">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-800  -mt-1.5">
                  {/* Display active image */}
                  <img
                    src={songs[activeImage].image}
                    alt={`Image ${activeImage + 1}`}
                    className="w-40  h-40 rounded-lg object-contain"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                </div>

                <div className="flex-1 min-w-[120px]">
                  <div className="space-y-1.5">
                    <p className="font-semibold leading-none tracking-tight">
                      {data[selectedIndex]?.title || `Track ${selectedIndex + 1}`}
                    </p>
                    <p className="text-sm text-zinc-600/80 dark:text-zinc-400">
                      {data[selectedIndex]?.artist || "Now Playing"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="sm:flex items-center gap-4 shrink-0">
                <button
                  onClick={handlePrevButton}
                  className="relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-full text-sm font-medium h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mr-2 bg-transparent hover:scale-105 transition-transform duration-300"
                  aria-label="Previous track"
                >
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                  <div className="pointer-events-none z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="h-5 w-5">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={togglePlay}
                  className="relative inline-flex mr-2 items-center justify-center cursor-pointer gap-2 rounded-full text-sm font-medium h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-transparent hover:scale-105 transition-transform duration-300"
                  aria-label="Play/Pause"
                >
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                  <div className="pointer-events-none z-10">
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="h-5 w-5">
                        <rect width="4" height="16" x="6" y="4" />
                        <rect width="4" height="16" x="14" y="4" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="h-5 w-5">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </div>
                </button>

                <button
                  onClick={handleNextButton}
                  className="relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-full text-sm font-medium h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-transparent hover:scale-105 transition-transform duration-300"
                  aria-label="Next track"
                >
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                  <div className="pointer-events-none z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="h-5 w-5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Progress */}
              <div className="flex progress items-center gap-3 flex-1 min-w-0">
                <span className="tabular-nums text-xs font-medium text-zinc-600 dark:text-zinc-400 w-12 text-right">
                  {formatTime(progress)}
                </span>

                {/* Clickable/seekable range over the bar */}
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/50 dark:bg-zinc-800/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-300/20 via-zinc-300/30 to-zinc-300/20 dark:from-white/5 dark:via-white/10 dark:to-white/5" />
                  <div
                    className="absolute inset-y-0 left-0 flex bg-gradient-to-r from-black/60 via-black/60 to-black/60 dark:from-white/80 dark:via-white/80 dark:to-white/80 transition-all duration-200 ease-out pointer-events-none"
                    style={{
                      width:
                        duration > 0
                          ? `${Math.min(100, (progress / duration) * 100)}%`
                          : "0%",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/5" />
                  </div>
                  {/* invisible input for seeking */}
                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={progress}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label="Seek"
                  />
                </div>

                <span className="tabular-nums text-xs font-medium text-zinc-600 dark:text-zinc-400 w-12">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Volume */}
              <div className="flex volume items-center gap-2 shrink-0">
                <input
                  type="range"
                  className="level w-28 accent-white"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  aria-label="Volume"
                />
                <svg
                  className="volume"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <g>
                    <path d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z" />
                    <path d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Hover sheen */}
          <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}