import { connect } from "frontity";
import React, { useEffect, useState, useRef } from "react";
import Loading from "../loading";
import { useWindowSize } from "../../helpers";
import styled from "styled-components";

const TriangleLanding = ({ state }) => {
  const [loaded, setLoaded] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRefs = useRef({ foreground: null, background: null });
  const size = useWindowSize();

  const landingData = state.source.get(state.router.link);

  useEffect(() => {
    const initializeVideos = async () => {
      if (!landingData.isReady || !item?.background_media?.length || !item?.foreground_media?.length) return;

      try {
        const foreground = videoRefs.current.foreground;
        const background = videoRefs.current.background;

        foreground.muted = true;
        foreground.playsInline = true;
        background.muted = true;
        background.playsInline = true;

        await Promise.all([
          new Promise((resolve) => (foreground.onloadedmetadata = resolve)),
          new Promise((resolve) => (background.onloadedmetadata = resolve)),
        ]);

        try {
          await Promise.all([foreground.play(), background.play()]);
          setVideoLoaded(true);
          setLoaded(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err);
          setNeedsInteraction(true);
        }
      } catch (err) {
        console.error("Video init failed:", err);
        setNeedsInteraction(true);
      }
    };

    initializeVideos();
  }, [landingData.isReady]);

  const handlePlayClick = async () => {
    try {
      await Promise.all([
        videoRefs.current.foreground.play(),
        videoRefs.current.background.play(),
      ]);
      setVideoLoaded(true);
      setNeedsInteraction(false);
      setLoaded(true);
    } catch (err) {
      console.error("Manual play failed:", err);
    }
  };

  const renderVideo = (type, src) => (
    <Video
      ref={(el) => (videoRefs.current[type] = el)}
      playsInline
      muted
      loop
      preload="auto"
      className={type}
    >
      <source src={src} type="video/mp4" />
    </Video>
  );

  const item = landingData?.acf || {};

  return landingData.isReady ? (
    <Container>
      <Background>
        {item.background_media?.[0]?.guid && renderVideo("background", item.background_media[0].guid)}
      </Background>
      <Foreground>
        {item.foreground_media?.[0]?.guid && renderVideo("foreground", item.foreground_media[0].guid)}
      </Foreground>

      {!videoLoaded && (
        <Overlay>
          <Spinner />
          {needsInteraction && (
            <PlayButton onClick={handlePlayClick}>Click to Start</PlayButton>
          )}
        </Overlay>
      )}
    </Container>
  ) : (
    <Loading />
  );
};

export default connect(TriangleLanding);

// --- Styled Components ---

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Foreground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const PlayButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background: white;
  color: black;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;