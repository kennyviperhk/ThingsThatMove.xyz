import { connect, decode, Global, css } from "frontity";
import React, { Component, Fragment, useEffect } from "react";
import { styled, keyframes } from "frontity";
import { getMediaAttributes } from '../../helpers'
import Link from "../link";
import Img from "@frontity/components/image";
import {Animated} from "react-animated-css";


const BioTextSection = ({ state, actions, libraries, data }) => {

  const media = data.profile_pic;

  return (<BioTextSec className="container" >
  <MyBioNameDiv>
  <MyBioName><Animated animationIn="fadeIn" animationInDuration={1500} animationInDelay={0} animationOut="fadeOut" isVisible={true}><BgH1Span>THINGS</BgH1Span><BgH1Span>THAT</BgH1Span><BgH1Span>MOVE</BgH1Span></Animated></MyBioName>
</MyBioNameDiv>

    <TxtMainDivUp>

    <TxtSubDivL>
        <QuoteP>{data.primary_quote}</QuoteP>
        <DescP>{data.primary_desc}</DescP>
      </TxtSubDivL>
    </TxtMainDivUp>
    <TxtMainDivDown>
      <PicDiv>
        <ProfilePic alt={media.post_title} src={media.guid} />
      </PicDiv>
    <TxtSubDivR>
        <QuoteP>{data.secondary_quote}</QuoteP>
        <DescP>{data.secondary_desc}</DescP>
      </TxtSubDivR>
    </TxtMainDivDown>
  </BioTextSec>

  );
};

export default connect(BioTextSection);

const sectionHeight = '80vh';
const jobTitleFontSize = '6vw';


const BioTextSec = styled.section`

  display:flex;
  flex-direction: column;
  background: white;
  color: black;
  margin: 0 auto;
  width:100%;
  height:auto;
  @media(orientation: portrait){
    height:auto;
  }
`

const TxtMainDivUp = styled.div`
  flex-row:1/2;
  position:relative;
  width:100%;
  height:auto;
  @media(orientation: portrait){
    height:auto;
  }
`


const TxtSubDivL = styled.div`

  position: relative;
  height:auto;
  max-width: 600px;
  text-align: left;
  left:10%;
  font-size:15px;
  padding: 20px 0;
  @media(orientation: portrait){
    position: relative;
    left:0;
    padding: 20px 15px;
    height: auto;
    margin: 0 auto;
  }
`


const TxtMainDivDown = styled.div`
  flex-row:1/2;
  position:relative;
  width:100%;
  height:auto;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  flex-flow: row nowrap;
  @media(orientation: portrait){
    flex-direction: column;
      height:auto;
  }
`

const TxtSubDivR = styled.div`

  position: relative;

  text-align: left;
  font-size:15px;
  width:50%;
  padding: 0px 45px 0 10%;
  align-items: center;
  display:flex;

  @media(orientation: portrait){
    position: relative;
    flex-direction: column;
    height:auto;
    width:100%;
    right:0;
    padding-left:15px;
    margin: 0 auto;
  }
`


const PicDiv = styled.div`

  position: relative;
  height:100%;
  left:0%;
  width:50%;
  font-size:15px;
  background:#F2F2F2;

  @media(orientation: portrait){
    position: relative;
    height:auto;
    width:100%;

  }
`



const ProfilePic = styled.img`
  display:block;
  position:relative;
  height:calc(40vw / 1.7);;
  right:-40%;
  margin:30px 0 30px 0;
  object-fit:cover;

  @media(orientation: portrait){
    position: relative;
    height:auto;
    width:100%;
    right:0%;
    bottom:0%;
    margin:0 0 0 0px ;
  }
`

const QuoteP = styled.p`
`

const DescP = styled.p`
  white-space: pre-line;
`
const MyBioNameDiv = styled.div`
  position:absolute;
  top:10vh;
  right:0;
  overflow:hidden;
  @media(orientation: portrait) {{
    top:48vh;
  }
}
`


const MyBioName = styled.h1`

  font-family: "Archiv Grotesk", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
  Helvetica, sans-serif;
  font-size: 10.5vw;
    line-height:10.5vw;
  z-index:3;
  letter-spacing: 0.3vw;
  mix-blend-mode: difference;
  display:block;
  position:relative;
  margin-right:-6vw;
  color:white;
  @media(orientation: portrait) {{
      mix-blend-mode: difference;
    display:block;
    font-size: 85px;
    color:white;
    line-height:85px;
  }
`;

const BgH1Span = styled.div`
padding: 0 50px;
@media(orientation: portrait) {
padding: 0 0;
}
`
