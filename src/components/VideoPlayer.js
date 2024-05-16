// VideoPlayer.js
import React, { useState, useRef, useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captionText, setCaptionText] = useState("");
  const [captionTimestamp, setCaptionTimestamp] = useState("");
  const [captions, setCaptions] = useState([]);
  const videoRef = useRef(null);

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaptionText(event.target.value);
  };

  const handleTimestampChange = (event) => {
    setCaptionTimestamp(event.target.value);
  };

  const handleAddCaption = () => {
    if (captionText.trim() !== "" && captionTimestamp.trim() !== "") {
      setCaptions([
        ...captions,
        { text: captionText, timestamp: captionTimestamp },
      ]);
      setCaptionText("");
      setCaptionTimestamp("");
    }
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play().catch((error) => {
        // This catch block handles the error if the play() request was interrupted
        console.error("The play() request was interrupted:", error);
      });
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return; // Exit early if videoRef.current is null
    const updateTime = () => {
      const currentTime = video.currentTime;
      const currentCaption = captions.find((caption, index) => {
        const timestampInSeconds = getSeconds(caption.timestamp);
        const nextTimestamp = captions[index + 1]
          ? getSeconds(captions[index + 1].timestamp)
          : Infinity;
        return currentTime >= timestampInSeconds && currentTime < nextTimestamp;
      });
      if (currentCaption) {
        setCaptionText(currentCaption.text);
      } else {
        setCaptionText("");
      }
    };
    video.addEventListener("timeupdate", updateTime);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, [captions]);

  const getSeconds = (timestamp) => {
    const [hours, minutes, seconds] = timestamp.split(":").map(parseFloat);
    return hours * 3600 + minutes * 60 + seconds;
  };

  return (
    <div className="video-player-container">
      <h1 style={{ textAlign: "center" }}>Video Captioning App</h1>
      <div className="video-player">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={handleUrlChange}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter caption"
          value={captionText}
          onChange={handleCaptionChange}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter timestamp (e.g., 00:00:05)"
          value={captionTimestamp}
          onChange={handleTimestampChange}
          className="input-field"
        />

        <button onClick={handleAddCaption} className="add-caption-button">
          Add Caption
        </button>

        {videoUrl && (
          <video
            ref={videoRef}
            controls
            onClick={handlePlayPause}
            onKeyPress={(e) => {
              if (e.key === " ") {
                handlePlayPause();
              }
            }}
            className="video-element"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* Display captions above the video player */}
      {captionText && (
        <div className="captions">
          <div className="caption">
            <p>{captionText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
