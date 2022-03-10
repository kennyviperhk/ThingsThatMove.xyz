import { connect, Global, css, styled, keyframes } from "frontity";
import React, { useEffect, useState } from "react";
import Link from "../link";
import Loading from "../loading";
//import TextLoop from "react-text-loop";
import { useWindowSize } from '../../helpers'
import {Animated} from "react-animated-css";

//import { Player, ControlBar, Shortcut } from 'video-react';
//import externalCSS from "../styles/video-react.css"; // import css
//import { VideoPlayer } from "../video-player";

const sectionHeight = 'calc(100vw / 2.2)';
const sectionHeightPortrait = 'calc(100vw * 1.42)';
let subMenuTop = 'calc(' + sectionHeight + ' - 8vh)';
let subMenuOpacity = 1.0;

let subMenuActiveBackgroundArtwork = 'black';
let subMenuActiveBackgroundDesign = 'black';
let subMenuActiveBackgroundTech = 'black';

let subMenuActiveTextArtwork = 'white';
let subMenuActiveTextDesign = 'white';
let subMenuActiveTextTech = 'white';

let nameTextShadowOn = '-1px -1px 100px rgba(255,255,255,0.3),1px -1px 100px rgba(255,255,255,0.3),-1px 1px 100px rgba(255,255,255,0.3),1px 1px 100px rgba(255,255,255,0.3);';


let frontImageOpacity = 1.0;

const subMenuFontSize = '20px';

const TriangleLanding = ({ state, actions }) => {

  let isBioPage;
  let isKineticsRoboticsPage;
  let isInteractiveDigitalPage;
  let isTechResearchPage;
  let isHomePage;
  let isPost;
  let landingData;
  function changePage(e){
    e.preventDefault();
    landingData = state.source.get(extraPostLink);
  }

  const size = useWindowSize();
  const p = "landings/";
  const extraPostLink = `/${p}`;
  landingData = state.source.get(extraPostLink);
  useEffect(() => {
    actions.source.fetch(extraPostLink);
  }, []);

  const data = state.source.get(state.router.link);

  isBioPage = (state.router.link === '/bio/') ? true : false;
  isKineticsRoboticsPage = (state.router.link === '/category/projects/kinetics-robotics/') ? true : false;
  isInteractiveDigitalPage = (state.router.link === '/category/projects/interactive-digital/') ? true : false;
  isTechResearchPage = (state.router.link === '/category/projects/tech-research/') ? true : false;
  isHomePage = (data.isHome) ? true : false;
  isPost = (data.isPost) ? true : false;

  let postTitle = "";
  let postTitleChinese = "";
  let postMedia = "";
  let mainName = ""
  let foregroundMedia;
  let backgroundMedia;

  if (isPost && data.isReady) {

    const post = state.source[data.type][data.id];
    let featureMediaURL = post.jetpack_featured_media_url;
    let n = featureMediaURL.indexOf('?');
    let ss = featureMediaURL.substring(0, n != -1 ? n : featureMediaURL.length);
    postTitle = post.title.rendered;
    postTitleChinese = post.chinese_title;
    postMedia = post.background_media.guid ? post.background_media.guid : ss;

  }


  if (landingData.isReady) {

    let landingURL, item;
    if (isBioPage) {
      landingURL = "/landings/bio/";
    } else if (isKineticsRoboticsPage) {
      landingURL = "/landings/kinetics-robotics/";
    } else if (isInteractiveDigitalPage) {
      landingURL = "/landings/interactive-digital/";
    } else if (isTechResearchPage) {
      landingURL = "/landings/tech-research/";
    } else if (isHomePage) {
      landingURL = "/landings/home/";
    } else if (isPost) { //HOME
      landingURL = "/landings/home/"; //TODO
    } else {
      landingURL = "/landings/home/"; //TODO
    }
    //console.log(landingURL)
    var items = landingData.items.map(({ type, id, link }, index) => {
      if (link === landingURL) {
        item = state.source[type][id];
      }
    })

    const foregroundBlackDiv = <BlackDiv></BlackDiv>;
    const backgroundWhiteDiv = <BackgroundImageDiv><WhiteDiv></WhiteDiv></BackgroundImageDiv>;

    const foregroundVideo = item.foreground_media[0] && <React.Fragment key={item.foreground_media[0].guid}><VideoPlayerNative playsInline={true} autoPlay={true} muted={true} loop={true}>
      <source src={item.foreground_media[0].guid} type={"video/mp4"} key={item.foreground_media[0].guid}/>
    </VideoPlayerNative></React.Fragment>;
    const backgroundVideo = item.background_media[0] && <BackgroundImageDiv><React.Fragment key={item.background_media[0].guid}><VideoPlayerNative playsInline={true} autoPlay={true} muted={true} loop={true}>
      <source src={item.background_media[0].guid} type={"video/mp4"} key={item.background_media[0].guid}/>
    </VideoPlayerNative></React.Fragment></BackgroundImageDiv>;

    if (isBioPage) {

      foregroundMedia = foregroundBlackDiv;
      backgroundMedia = backgroundWhiteDiv;

      subMenuTop = '-100px';
      subMenuOpacity = 0;
      subMenuActiveBackgroundArtwork = 'none';
      subMenuActiveBackgroundDesign = 'none';
      subMenuActiveBackgroundTech = 'none';
      subMenuActiveTextArtwork = 'black';
      subMenuActiveTextDesign = 'black';
      subMenuActiveTextTech = 'black';
      frontImageOpacity = 1.0;
        mainName = <MyName><BgH1Span></BgH1Span><BgH1Span></BgH1Span></MyName>;
    } else if (isHomePage) {

      foregroundMedia = foregroundVideo;
      backgroundMedia = backgroundVideo;

      subMenuTop = (size.width <= 900 && isHomePage ? '-100px' : 'calc(' + sectionHeight + ' - 8vh)');
      subMenuOpacity = (size.width <= 900 && isHomePage ? 0 : 1.0);
      subMenuActiveBackgroundArtwork = 'none';
      subMenuActiveBackgroundDesign = 'none';
      subMenuActiveBackgroundTech = 'none';
      subMenuActiveTextArtwork = 'black';
      subMenuActiveTextDesign = 'black';
      subMenuActiveTextTech = 'black';
      frontImageOpacity = 1.0;

      mainName = <MyName><Animated animationIn="fadeIn" animationInDuration={5000} animationInDelay={0} animationOut="fadeOut" isVisible={true}><BgH1Span>THINGS THAT MOVE</BgH1Span></Animated></MyName>;

      /*
        const playerOptions = {
        sources: [
          {
            src: item.foreground_media[0].guid
          },
        ],
        loop: true,
        preload: "auto"
        };
      */

    } else if (isPost) {

        foregroundMedia = foregroundBlackDiv;

        var imgs =["jpg", "jpeg", "gif", "tiff", "png", "webp"];
        var vids = ["mp4", "webm"];

        if( imgs.indexOf(postMedia.split('.').pop()) >= 0 )
        {
            backgroundMedia = <BackgroundImageDivDarken><Img src={postMedia} alt={postTitle} /></BackgroundImageDivDarken>;
        } else if ( vids.indexOf(postMedia.split('.').pop()) >= 0 )
        {
            backgroundMedia = <BackgroundImageDivDarken><React.Fragment key={postMedia}><VideoPlayerNative playsInline={true} autoPlay={true} muted={true} loop={true} >
              <source src={postMedia} type="video/mp4" />
              </VideoPlayerNative></React.Fragment></BackgroundImageDivDarken>;
        }

    //  subMenuTop = '-100px';
      subMenuOpacity = 0;
      subMenuActiveBackgroundArtwork = 'none';
      subMenuActiveBackgroundDesign = 'none';
      subMenuActiveBackgroundTech = 'none';
      subMenuActiveTextArtwork = 'black';
      subMenuActiveTextDesign = 'black';
      subMenuActiveTextTech = 'black';
      frontImageOpacity = 0;

      mainName = <MyName><BgH1Span></BgH1Span><BgH1Span></BgH1Span></MyName>;
    } else if (isKineticsRoboticsPage) {

      foregroundMedia = foregroundVideo;
      backgroundMedia = backgroundWhiteDiv;
      subMenuTop = '10vh';
      subMenuOpacity = 1.0;
      subMenuActiveBackgroundArtwork = 'black';
      subMenuActiveBackgroundDesign = 'none';
      subMenuActiveBackgroundTech = 'none';
      subMenuActiveTextArtwork = 'white';
      subMenuActiveTextDesign = 'black';
      subMenuActiveTextTech = 'black';
      frontImageOpacity = 1.0;

      mainName = <MyName><BgH1Span css={css`color:Black;text-shadow:${nameTextShadowOn}`}>Physical</BgH1Span><BgH1Span></BgH1Span></MyName>;

    } else if (isInteractiveDigitalPage) {
      foregroundMedia = foregroundVideo;
      backgroundMedia = backgroundWhiteDiv;
      subMenuTop = '10vh';
      subMenuOpacity = 1.0;
      subMenuActiveBackgroundArtwork = 'none';
      subMenuActiveBackgroundDesign = 'black';
      subMenuActiveBackgroundTech = 'none';
      subMenuActiveTextArtwork = 'black';
      subMenuActiveTextDesign = 'white';
      subMenuActiveTextTech = 'black';
      frontImageOpacity = 1.0;

      mainName = <MyName><BgH1Span css={css`color:Black;text-shadow:${nameTextShadowOn}`}>Digital</BgH1Span><BgH1Span></BgH1Span></MyName>;
    } else if (isTechResearchPage) {
      foregroundMedia = foregroundVideo;
      backgroundMedia = backgroundWhiteDiv;
      subMenuTop = '10vh';
      subMenuOpacity = 1.0;
      subMenuActiveBackgroundArtwork = 'none';
      subMenuActiveBackgroundDesign = 'none';
      subMenuActiveBackgroundTech = 'black';
      subMenuActiveTextArtwork = 'black';
      subMenuActiveTextDesign = 'black';
      subMenuActiveTextTech = 'white';
      frontImageOpacity = 1.0;

      mainName = <MyName><BgH1Span css={css`color:Black;text-shadow:${nameTextShadowOn}`}>Art and Technology</BgH1Span><BgH1Span></BgH1Span></MyName>;
    } else {

      foregroundMedia = foregroundBlackDiv;
      backgroundMedia = backgroundWhiteDiv;
      subMenuTop = 'calc(' + sectionHeight + ' - 8vh)';
      subMenuOpacity = 1.0;
      subMenuActiveBackgroundArtwork = 'none';
      subMenuActiveBackgroundDesign = 'none';
      subMenuActiveBackgroundTech = 'none';
      subMenuActiveTextArtwork = 'black';
      subMenuActiveTextDesign = 'black';
      subMenuActiveTextTech = 'black';
      frontImageOpacity = 1.0;

      mainName = <MyName><BgH1Span>THINGS THAT MOVE</BgH1Span></MyName>;
    }

  }

  return landingData.isReady ? (<TriangleSection className="container" >

    <TextLoopDiv>
        {/*<ThingsThatMove>THINGS THAT MOVE</ThingsThatMove>*/}
        {mainName}
    </TextLoopDiv>

    <PostTitleDiv><PostTitle>{postTitle}</PostTitle><PostTitleChinese>{postTitleChinese}</PostTitleChinese></PostTitleDiv>

    <NumbersDeco css={isHomePage || isTechResearchPage ? css`opacity: 1;`:css`opacity: 0;`}><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span></NumbersDeco>
    <MyNameBottomLine></MyNameBottomLine>
    <DecoCircle></DecoCircle>
    {/*css={css`background: ${subMenuActiveBackground};`}*/}

    <SubMenu css={css`top: ${subMenuTop}; opacity: ${subMenuOpacity}`}>
      <SubMenuTitleDiv css={css`background: ${subMenuActiveBackgroundArtwork};`}><TitleLink css={css`color: ${subMenuActiveTextArtwork};`} link="/category/projects/kinetics-robotics" onClick={e => changePage(e)}>Kinetics and Robotics</TitleLink></SubMenuTitleDiv>
      <TitleDivHr><HrLine></HrLine></TitleDivHr>
      <SubMenuTitleDiv css={css`background: ${subMenuActiveBackgroundDesign};`}><TitleLink css={css`color: ${subMenuActiveTextDesign};`} link="/category/projects/interactive-digital" onClick={e => changePage(e)}>Interative and Digital</TitleLink></SubMenuTitleDiv>
      <TitleDivHr><HrLine></HrLine></TitleDivHr>
      <SubMenuTitleDiv css={css`background: ${subMenuActiveBackgroundTech};`}><TitleLink css={css`color: ${subMenuActiveTextTech};`} link="/category/projects/tech-research" onClick={e => changePage(e)}>Tech and Research</TitleLink></SubMenuTitleDiv>
    </SubMenu>
    <FrontImageDiv css={css`opacity: ${frontImageOpacity};`}>
      <FrontImagePolygonOutDiv>
        <Animated animationIn="fadeIn" animationInDuration={4000} animationInDelay={2000} animationOut="fadeOut" isVisible={true}>
        <FrontImagePolygonDiv >
          {foregroundMedia}
        </FrontImagePolygonDiv>
        </Animated>
      </FrontImagePolygonOutDiv>
    </FrontImageDiv>
    {backgroundMedia}
  </TriangleSection>
  ) : <Loading />;

}

export default connect(TriangleLanding);

const TriangleSection = styled.section`
  width: 100%;
  height: ${sectionHeight};
  overflow:hidden;
  @media(orientation: portrait) {
      height: ${sectionHeightPortrait};
  }
`;
const TextLoopDiv = styled.div`
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${sectionHeight};
  top:0;
  left:0;
  width:100%;
  z-index:3;
  mix-blend-mode: normal;
  overflow:hidden;
  @media(orientation: portrait) {
      height: ${sectionHeightPortrait};
  }
  & div{
    & div{
      width:100vw;
    }
  }
`

/*
text-shadow:
 -1px -1px 100px rgba(255,255,255,0.3),
  1px -1px 100px rgba(255,255,255,0.3),
  -1px 1px 100px rgba(255,255,255,0.3),
   1px 1px 100px rgba(255,255,255,0.3);
*/

const MyName = styled.h1`
  justify-content: center;
  align-items: center;
  font-family: "Archiv Grotesk", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
  Helvetica, sans-serif;
  font-size: 7.5vw;
  text-align: center;
  z-index:3;
  letter-spacing: 0.3vw;
  mix-blend-mode: normal;
  display:flex;
  @media(orientation: portrait) {
    display:block;
    font-size: 15.5vw;
    padding-top:150px;
  }
`;



const BgH1Span = styled.div`
padding: 0 50px;
transition: all 1.0s;
  @media(orientation: portrait) {
    padding: 0 0;
  }
`

const NumbersDeco = styled.span`
  color:#707070;
  width:100%;
  z-index:1;
  position: absolute;
  top: calc(${sectionHeight} * 0.22);
  display:flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: space-evenly;
    transition: all 1.0s;
  & span{
    font-weight:200;
  }
  @media(orientation: portrait){
    display:none;
      top: calc(${sectionHeightPortrait} * 0.35);
  }
`

const MyNameBottomLine = styled.span`
  border-bottom: 1px #707070 solid;
  width:100%;
  z-index:2;
  position: absolute;
  top: calc(${sectionHeight} * 0.75);
  @media(orientation: portrait){
      top: calc(${sectionHeightPortrait} * 0.80);
  }
`

const circleAnimation = keyframes`
  33% {
    transform: translate(20%,-10%) scale(1.2);
  }
  66% {
    transform: translate(-20%,10%) scale(0.8);
  }
`

const DecoCircle = styled.span`
  border: 1px #707070 solid;
  border-radius: 50%;
  width: calc(${sectionHeight} * 0.6);
  height: calc(${sectionHeight} * 0.6);
  z-index: 2;
  position: absolute;
  top: calc(${sectionHeight} * 0.20);
  left:8%;
  animation: ${circleAnimation} 120s ease infinite;
  overflow:hidden;
  @media(orientation:portrait){
    width: calc(${sectionHeightPortrait} * 0.4);
    height: calc(${sectionHeightPortrait} * 0.4);
    top: calc(${sectionHeightPortrait} * 0.22);
  }
`

const BackgroundImageDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
    transition: all 1.0s;
    &:after{
      content:'';
      position:absolute;
      width:100%; height:100%;
      top:0; left:0;
      background:rgba(0,0,0,0.6);
      opacity:0;
      transition: all 1.0s;
    }
`;

const BackgroundImageDivDarken = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
    transition: all 1.0s;
    &:after{
      content:'';
      position:absolute;
      width:100%; height:100%;
      top:0; left:0;
      background:rgba(0,0,0,0.6);
      opacity:1;
      transition: all 1.0s;
    }
`;



const BackgroundImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;


const FrontImageDiv = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${sectionHeight};
  overflow:hidden;
  transition: all 1.0s;
  top:0;
  @media(orientation: portrait) {
      height: ${sectionHeightPortrait};
  }
`;
/*//https://bennettfeely.com/clippy/*/
const triangleAnimation = keyframes`
  33% {
    clip-path: polygon(50% 15%, 31% 88%, 77% 60%);
  }
  66% {
    clip-path: polygon(72% 19%, 29% 39%, 60% 94%);
  }
`

const triangleAnimationMobile = keyframes`
  33% {
    clip-path: polygon(73% 13%, 8% 58%, 95% 91%);
  }
  66% {
    clip-path: polygon(100% 19%, 0 37%, 59% 86%);
  }
`

const FrontImagePolygonOutDiv = styled.div`
  width: 100%;
  height: ${sectionHeight};
  background: #707070;
  animation: ${triangleAnimation} 120s ease infinite;
  clip-path: polygon(63% 10%, 28% 65%, 72% 92%);
  @media(orientation: portrait){
    clip-path: polygon(35% 18%, 4% 89%, 120% 66%);
    animation: ${triangleAnimationMobile} 120s ease infinite;
    height: ${sectionHeightPortrait};
  }
`;

/* transition: 0.4s cubic-bezier(0, 1, 0.65, 0.94); */
const FrontImagePolygonDiv = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background-size: cover;
  animation: ${triangleAnimation} 120s ease infinite;
  clip-path: polygon(63% 10%, 28% 65%, 72% 92%);
  @media(orientation: portrait){
    clip-path: polygon(35% 18%, 4% 89%, 120% 66%);
        animation: ${triangleAnimationMobile} 120s ease infinite;
  }
`;

const FrontImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

/*  mix-blend-mode: difference;*/
const SubMenu = styled.div`
  text-decoration: none;
  mix-blend-mode: normal;
  position: absolute;
  width: 100%;
  height: 60px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  overflow:hidden;
  padding: 10px 15px 10px 15px;
  @media(orientation: portrait){
    flex-flow:column;
    height: 180px;
  }
  transition: all 1.0s;
`;


const SubMenuTitleDiv = styled.div`
  text-align:center;
  width:210px;
  &:nth-of-type(1){
    text-align:left;
  }
  &:nth-of-type(3){
    width:300px;
  }
  &:nth-of-type(5){
    text-align:right;
  }
  text-shadow: -1px -1px 0px rgba(255,255,255,0.0),1px -1px 0px rgba(255,255,255,0.0),-1px 1px 0px rgba(255,255,255,0.0),1px 1px 0px rgba(255,255,255,0.2);
  @media(orientation: portrait){
    margin: 0 auto;
    height:38px;
    &:nth-of-type(1){
      text-align:center;
    }
    &:nth-of-type(3){
      width:300px;
    }
    &:nth-of-type(5){
      text-align:center;
    }
  }
`;

const TitleDivHr = styled.div`
  flex-grow:1;
  margin-top: -20px;
  @media(orientation: portrait){
    border-left: 2px solid black;
    left:50%;
    position:relative;
    margin-top: 10px;
  }
`;

const HrLine = styled.hr`
  border: none;
  height: 1px;
  /* Set the hr color */
  color: black; /* old IE */
  background-color: black; /* Modern Browsers */
    @media(orientation: portrait){
      display:none;
    }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  mix-blend-mode: normal;
  display: block;
  font-size: ${subMenuFontSize};
  font-weight:500;
  white-space: nowrap;
  padding:5px 45px 15px 45px;
  &:hover {
    text-decoration: underline;
  }
  &:active{
    color: white;
  }
  @media(orientation: portrait){
    padding: 2px 15px 0px 15px;
  }
`;

const BlackDiv = styled.div`
  background:black;
  width:100%;
  height:100%;
`;

const WhiteDiv = styled.div`
  background:white;
  width:100%;
  height:100%;
`;

const PostTitleDiv = styled.div`
  position: relative;
  height:100%;
  padding-left: 45px;
  @media(orientation: portrait){
    padding-left: 15px;
  }
`;

const PostTitle = styled.h1`
  position:absolute;
  bottom:1.3em;
  color: white;
  text-transform: none;
  font-size: 3.5em;
  letter-spacing: 0.01em;
  @media(orientation: portrait){
    font-size: 8vw;
    letter-spacing: 0.01em;
  }
`;
const PostTitleChinese = styled.h1`
  position:absolute;
  bottom:0;
  color: white;
  text-transform: none;
  font-size: 3.1em;
  letter-spacing: 0.01em;
  @media(orientation: portrait){
    font-size: 8vw;
    letter-spacing: 0.01em;
  }
`;


const VideoPlayerNative = styled.video`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow:hidden;
  object-fit: cover;
  @media screen and (max-aspect-ratio: 1920/1080) {
      height: 100%;
  }
  @media screen and (min-aspect-ratio: 1920/1080) {
      width: 100%;
  }
`;


const Img = styled.img`
  display:block;
  min-width:100%;
  height:100%;
  object-fit:cover;
  @media(orientation: portrait){
    width:100%;
    height:100%;
  }
`
