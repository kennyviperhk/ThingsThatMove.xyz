import { connect, Global, css, styled, keyframes } from "frontity";
import React, { useEffect, useState, useRef } from "react";
import Link from "../link";
import Loading from "../loading";
import { useWindowSize } from '../../helpers';
import { Animated } from "react-animated-css";

const sectionHeight = 'calc(100vw / 2.2)';
const sectionHeightPortrait = 'calc(100vw * 1.42)';

const TriangleLanding = ({ state, actions }) => {
  const [loaded, setLoaded] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const videoRefs = useRef({ foreground: null, background: null });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const size = useWindowSize();

  // ... keep your existing page detection logic and state variables ...

  useEffect(() => {
    const initializeVideos = async () => {
      if (!landingData.isReady) return;

      try {
        const videos = {
          foreground: videoRefs.current.foreground,
          background: videoRefs.current.background
        };

        // Wait for video metadata to load
        await Promise.all([
          new Promise((resolve) => {
            videos.foreground.onloadedmetadata = resolve;
            videos.foreground.muted = true;
            videos.foreground.playsInline = true;
          }),
          new Promise((resolve) => {
            videos.background.onloadedmetadata = resolve;
            videos.background.muted = true;
            videos.background.playsInline = true;
          })
        ]);

        // Try autoplaying
        try {
          await Promise.all([
            videos.foreground.play(),
            videos.background.play()
          ]);
          setVideoLoaded(true);
          setLoaded(true);
        } catch (autoplayError) {
          console.log('Autoplay blocked, showing fallback');
          setNeedsInteraction(true);
        }
      } catch (error) {
        console.error('Video initialization error:', error);
        setNeedsInteraction(true);
      }
    };

    initializeVideos();
  }, [landingData.isReady]);

  const handlePlayClick = async () => {
    try {
      await Promise.all([
        videoRefs.current.foreground.play(),
        videoRefs.current.background.play()
      ]);
      setVideoLoaded(true);
      setNeedsInteraction(false);
      setLoaded(true);
    } catch (error) {
      console.error('Manual play failed:', error);
    }
  };

  // Modified video rendering section
  const renderVideo = (type, mediaItem) => (
    <VideoPlayerNative 
      ref={el => videoRefs.current[type] = el}
      playsInline
      muted
      loop
      preload="auto"
      className={type === 'foreground' ? 'foreground-video' : 'background-video'}
    >
      <source src={mediaItem.guid} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoPlayerNative>
  );

  // Modified background media rendering
  const backgroundMedia = item?.background_media[0] && (
    <BackgroundImageDiv>
      {renderVideo('background', item.background_media[0])}
      {!videoLoaded && <LoadingOverlay />}
    </BackgroundImageDiv>
  );

  // Add loading overlay component
  const LoadingOverlay = () => (
    <div className="loading-overlay">
      <div className="loading-spinner" />
      {needsInteraction && (
        <button 
          onClick={handlePlayClick}
          className="play-button"
        >
          Click to Start
        </button>
      )}
    </div>
  );

  // ... keep your existing conditional rendering logic ...

  return landingData.isReady ? (
    <TriangleSection className="container">
      {/* ... keep your existing JSX structure ... */}
      {backgroundMedia}
      {!loaded && <LoadingOverlay />}
    </TriangleSection>
  ) : <Loading />;
};

// Add new styled components
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .loading-spinner {
    border: 4px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top: 4px solid #fff;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  .play-button {
    position: absolute;
    padding: 12px 24px;
    background: #fff;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// ... keep your existing styled components ...

export default connect(TriangleLanding);