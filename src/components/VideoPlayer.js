import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'; // Import Plyr styles

const VideoPlayer = ({ videoUrl, poster, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize the Plyr instance
    const player = new Plyr(videoRef.current, {
      controls: [
        'play-large',   // Centered play button
        'play',         // Play button
        'current-time', // Current time display
        'progress',     // Progress bar
        'duration',     // Full duration display
        'fullscreen',   // Fullscreen toggle
      ],
      clickToPlay: true, // Disable default click-to-play behavior
      hideControls: true, // Ensure controls are always visible when needed
    });

    // Custom click behavior to toggle play/pause
    const handleVideoClick = () => {
      if (player.playing) {
        player.pause();
      } else {
        player.play();
      }
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('click', handleVideoClick);

    // Cleanup function
    return () => {
      videoElement.removeEventListener('click', handleVideoClick);
      player.destroy(); // Clean up the player instance
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="plyr-container">
      <video
        ref={videoRef}
        className="plyr__video-embed"
        poster={process.env.PUBLIC_URL + '/' + poster} // Ensure poster path is correct
        title={title}
        controls
      >
        {/* Ensure the video source is constructed correctly */}
        {videoUrl ? (
          <source src={process.env.PUBLIC_URL + videoUrl} type="video/mp4" />
        ) : (
          <p>Video not available</p> // Fallback if video URL is missing
        )}
        Your browser does not support HTML video.
      </video>
    </div>
  );
};

export default VideoPlayer;
