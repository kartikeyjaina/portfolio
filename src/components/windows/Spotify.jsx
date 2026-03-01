import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";
const Spotify = () => {
  return (
    <MacWindow width="25vw">
      <div className="spotify-window">
        <iframe
          style={{ borderRadius: "12px" }}
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/7M1N680X9nfMlGhUSiX96A?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
