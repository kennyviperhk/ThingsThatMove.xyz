import { } from "frontity";
import React, { Component, } from "react";
import { connect, styled, css } from "frontity";
import ReactPlayer from 'react-player/lazy';

const PostVideoText = ({ concept, video, isSecondary }) => {
  //const url = data.main_documentation_video;
    let videoPlayer;


    var imgs =["jpg", "jpeg", "gif", "tiff", "png", "webp"];
    var vids = ["mp4", "webm"];

    if( imgs.indexOf(video.split('.').pop()) >= 0 )
    {
        videoPlayer = <img src={video} alt={video} />;
    } else if ( vids.indexOf(video.split('.').pop()) >= 0 )
    {
        videoPlayer = <VideoPlayerNative playsInline={true} autoPlay={true} muted={true} loop={true} >
          <source src={video+"#t=0.1"} type="video/mp4" />
          </VideoPlayerNative>;
    }else{
    
      
         videoPlayer = video ? <ReactPlayer url={video} width='100%' height='100%'  controls='true'/> :"";
    }

  return (<PostVideoTextSection className="container" css={isSecondary ? css`flex-flow:row-reverse`:css`flex-flow:row`} >

    <ConceptDiv>
      <ConceptP>{concept}</ConceptP>
    </ConceptDiv>
    <VideoDiv>
      {videoPlayer}
    </VideoDiv>
  </PostVideoTextSection>
  )

}

export default connect(PostVideoText);
const sectionHeight = 'auto';


const PostVideoTextSection = styled.section`
  position:relative;
  width: 100%;
  height: ${sectionHeight};
  background: white;
  color:black;
  display:flex;
  padding: 100px 0;
  align-items: stretch;

  @media(orientation: portrait){
    flex-flow: column-reverse;
    padding: 50px 0;
  }
`;

const ConceptDiv = styled.div`
  position:relative;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-self: start;
  @media(orientation: portrait){
  width: 100%;
  }
`;

const ConceptP = styled.p`
  max-width:800px;
  padding: 0 50px;
  @media(orientation: portrait){
      padding: 20px 15px;
  }
  white-space: pre-line;
`;

const VideoDiv = styled.div`
    margin: 0 auto;
    width: 60%;
    padding: 0 5%;
    min-height: calc(50vw / 1.7);

    @media(orientation: portrait){
      padding: 0 0%;
      width: 100%;
      height: calc(90vw / 1.78);
    }
`;
