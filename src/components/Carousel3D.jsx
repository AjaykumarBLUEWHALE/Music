import React, { useEffect, useMemo, useRef, useState } from "react";

export default function ThreeDCarouselFixed15({
  
  images = [],                // array of 15 image URLs (optional)
  sceneWidth = 360,           // desktop defaults (will be overridden on small screens)
  sceneHeight = 240,
  cellWidth = 320,
  cellHeight = 200,
  transitionMs = 900,
}) {
  const cellCount = 15; // fixed
    const [volume, setVolume] = useState(50); // default volume at 50%
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Breakpoint/orientation detection
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

  // Auto orientation:
  // - Horizontal on desktop (>=1024) or landscape tablet (>=768 & landscape)
  // - Vertical on mobile or portrait tablet
  useEffect(() => {
    const desktop = vw >= 1024;
    const tabletLandscape = vw >= 768 && !portrait;
    setIsHorizontal(desktop || tabletLandscape);
  }, [vw, portrait]);

  // Responsive dimensions (so it doesn't overlap on small screens)
  const dims = useMemo(() => {
    if (vw < 640) {
      // mobile
      return {
        sceneW: 220,
        sceneH: 150,
        cellW: 200,
        cellH: 130,
        scale: 1, // no scale on mobile
        margin: "40px auto",
      };
    }
    if (vw < 1024) {
      // tablet
      return {
        sceneW: 300,
        sceneH: 200,
        cellW: 260,
        cellH: 170,
        scale: 1.1,
        margin: "60px auto",
      };
    }
    // desktop
    return {
      sceneW: sceneWidth,
      sceneH: sceneHeight,
      cellW: cellWidth,
      cellH: cellHeight,
      scale: 1.25, // gentle scale, not too large
      margin: "80px auto",
    };
  }, [vw, sceneWidth, sceneHeight, cellWidth, cellHeight]);

  const carouselRef = useRef(null);
  const [contSize, setContSize] = useState({ width: dims.sceneW, height: dims.sceneH });

  // Keep measured container size (for radius)
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

  // Update contSize when dims change
  useEffect(() => {
    setContSize({ width: dims.sceneW, height: dims.sceneH });
  }, [dims.sceneW, dims.sceneH]);

  const theta = useMemo(() => 360 / cellCount, []);
  const radius = useMemo(() => {
    const size = isHorizontal ? contSize.width : contSize.height;
    const usable = size || (isHorizontal ? dims.sceneW : dims.sceneH);
    return Math.round((usable / 2) / Math.tan(Math.PI / cellCount));
  }, [contSize, isHorizontal, dims.sceneW, dims.sceneH]);

  const rotateFn = isHorizontal ? "rotateY" : "rotateX";
  const containerTransform = `translateZ(${-radius}px) ${rotateFn}(${
    -selectedIndex * theta
  }deg)`;

  const cells = useMemo(() => Array.from({ length: cellCount }, (_, i) => i), []);

  return (
    <div style={{ textAlign: "center", overflow: "hidden" }}>
      {/* 3D Scene */}
      <div
        className="scene"
        style={{
          transform: `scale(${dims.scale})`,
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
            transition: `transform ${transitionMs}ms`,
          }}
        >
          {cells.map((i) => {
            const angle = theta * i;
            const cellTransform = `${rotateFn}(${angle}deg) translateZ(${radius}px)`;
            const imgSrc = images[i];

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
                  transition: `transform ${transitionMs}ms, opacity ${transitionMs}ms`,
                  transform: cellTransform,
                  opacity: 1,
                  background: "#000",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 40,
                }}
              >
                {imgSrc ? (
                  <img
                    src="https://mcdn.wallpapersafari.com/small/56/44/i4ctpb.jpg"
                    alt={`Slide ${i + 1}`}
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

      {/* Controls */}
      <div
        className="carousel-options"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          background: "hsla(0, 0%, 100%, 0.8)",
          width: dims.sceneW,
          margin: "16px auto 0",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
    
      </div>
         <div className="w-full max-w-sm p-4">

        
      {/* styler player */}  
   {/* styler player */}
<div
  className="sm:w-300 w-80
    relative overflow-hidden rounded-lg transition-transform duration-300 group
    bg-white/20 dark:bg-zinc-900/20
    text-zinc-900 dark:text-white
    backdrop-blur-sm
    p-6 hover:scale-[1.02]
    shadow hover:shadow-lg hover:shadow-indigo-500/20"
>
  {/* Inner ring/outline */}
  <div className="absolute inset-0 z-0 h-full w-full rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />

  {/* Optional glass overlay (keep only if you have styles for .glass-effect) */}
  <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg glass-effect" />

  {/* Single horizontal row: Header → Controls → Progress → Volume */}
  <div className="relative z-10">
    <div className="flex items-center gap-6">
      {/* Header (icon + text) */}
      <div className="flex items-start gap-2 shrink-0">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 -mt-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
        </div>

        <div className="flex-1">
          <div className="space-y-1.5">
            <p className="font-semibold leading-none tracking-tight">Now Playing</p>
            <p className="text-sm text-zinc-600/80 dark:text-zinc-400">
              Lofi Beats - Chill Mix
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Previous */}
        <button
          onClick={() => setSelectedIndex((i) => ((i - 1 + cellCount) % cellCount))}
          className="relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-full text-sm font-medium h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-transparent hover:scale-105 transition-transform duration-300"
          aria-label="Previous track"
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10" />
          <div className="pointer-events-none z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </button>

        {/* Pause */}
        <button
          className="relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-full text-sm font-medium h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-transparent hover:scale-105 transition-transform duration-300"
          aria-label="Pause"
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10" />
          <div className="pointer-events-none z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="4" height="16" x="6" y="4" />
              <rect width="4" height="16" x="14" y="4" />
            </svg>
          </div>
        </button>

        {/* Next */}
        <button
          onClick={() => setSelectedIndex((i) => (i + 1) % cellCount)}
          className="relative inline-flex items-center justify-center cursor-pointer gap-2 rounded-full text-sm font-medium h-9 w-9 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-transparent hover:scale-105 transition-transform duration-300"
          aria-label="Next track"
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10" />
          <div className="pointer-events-none z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 flex-1">
        {/* Current time */}
        <span className="tabular-nums text-xs font-medium text-zinc-600 dark:text-zinc-400 w-12 text-right">
          1:30
        </span>

        {/* Bar */}
        <div
          className="relative h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/50 dark:bg-zinc-800/50"
          role="presentation"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-300/20 via-zinc-300/30 to-zinc-300/20 dark:from-white/5 dark:via-white/10 dark:to-white/5" />
          <div
            className="absolute inset-y-0 left-0 flex bg-gradient-to-r from-black/60 via-black/60 to-black/60 dark:from-white/80 dark:via-white/80 dark:to-white/80 transition-all duration-200 ease-out"
            style={{ width: "40%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/5" />
          </div>
        </div>

        {/* Total time */}
        <span className="tabular-nums text-xs font-medium text-zinc-600 dark:text-zinc-400 w-12">
          3:45
        </span>
      </div>

      {/* Volume */}
    <div>
      <label className="slider flex items-center gap-2">
        {/* Range input */}
        <input
          type="range"
          className="level"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />

        {/* Volume icon */}
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
      </label>

 
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

