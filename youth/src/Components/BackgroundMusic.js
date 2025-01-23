import React, { useState } from "react";
import chant from '../utils/chant.mp3';

// You can import FontAwesome icon or use an SVG for the sound icon
import { FaVolumeUp } from 'react-icons/fa'; 

const BackgroundMusic = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const enableMusic = () => {
    const audio = document.getElementById("background-music");
    audio.muted = false; // Unmute the audio
    audio.play(); // Play the audio
    setIsOverlayVisible(false); // Hide the overlay
  };

  return (
    <div>
      {/* Audio Element */}
      <audio id="background-music" autoPlay loop muted>
        <source src={chant} type="audio/mpeg" />
        <source src="/music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Interaction Overlay with sound icon */}
      {isOverlayVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            flexDirection: "column",
          }}
        >
          <p>Click to enable background music</p>
          <div
            onClick={enableMusic}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "2rem",
              color: "#fff",
            }}
          >
            <FaVolumeUp size={50} /> {/* FontAwesome Sound Icon */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
