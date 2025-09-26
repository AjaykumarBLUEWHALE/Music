import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Label from "../components/Label";
const Play = () => {
  const [showRotateMessage, setShowRotateMessage] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth < 768; // only trigger on mobile
      const isPortrait = window.innerHeight > window.innerWidth;

      if (isMobile && isPortrait) {
        setShowRotateMessage(true);
      } else {
        setShowRotateMessage(false);
      }
    };

    // Run initially
    checkOrientation();

    // Listen for screen resize/orientation change
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
        <>
          <Label title="PLAY" />
    <div className="relative flex flex-col items-center justify-center bg-black min-h-screen text-white">
      <div className="text-5xl mt-3 flicker sm:text-9xl mb-4" style={{fontFamily:" 'Lomo Copy', sans-serif"}}>PLAY</div>

      {/* Rotate Message */}
      {showRotateMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 text-center px-6">
          <p className="text-lg sm:text-2xl" style={{ fontFamily: "'Lomo Copy', sans-serif" }}>
            <span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <path fill="white"  d="M208 64C172.7 64 144 92.7 144 128L144 512C144 547.3 172.7 576 208 576L432 576C467.3 576 496 547.3 496 512L496 128C496 92.7 467.3 64 432 64L208 64zM280 480L360 480C373.3 480 384 490.7 384 504C384 517.3 373.3 528 360 528L280 528C266.7 528 256 517.3 256 504C256 490.7 266.7 480 280 480z"/>
</svg>


              </span>Please rotate your phone to <b>landscape</b> for the best experience.
          </p>
        </div>
      )}

      {/* Game Iframe */}
      <div
        className={`transition-transform duration-500 ${
          showRotateMessage ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <iframe
          src="https://1000webgames.com/games/parkthetaxi3/html5/"
          title="Park the Taxi"
          className="border-0 w-[90vw] h-[50vh] sm:w-[80vw] sm:h-[80vh] rotate-90 sm:rotate-0 origin-center"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
        </>
  );
};

export default Play;
