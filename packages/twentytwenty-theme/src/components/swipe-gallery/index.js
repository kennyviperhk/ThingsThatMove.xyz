import { connect, decode, Global, css } from "frontity";
import React, { Component, Fragment, useEffect, useState, useRef } from "react";
import { styled, keyframes } from "frontity";
import { getMediaAttributes } from '../../helpers'
import Link from "../link";

import Swiper from 'react-id-swiper';
import externalCss from './swiper-bundle.css';
//import ArrowSVG from "../styles/arrowUp.svg";
import TextLoop from "react-text-loop";



const SwipeGallery = ({ state, actions, libraries, data }) =>{

const [swiper, setSwiper] = useState(null);

const ref = useRef(null);

  const goNext = () => {
  //  console.log(ref.current.firstChild.swiper)
    if (ref.current.firstChild !== null && ref.current.firstChild.swiper !== null) {
      ref.current.firstChild.swiper.slideNext();
    }
  };

  const goPrev = () => {
  //  console.log(ref.current.firstChild.swiper)
    if (ref.current.firstChild !== null && ref.current.firstChild.swiper !== null) {
      ref.current.firstChild.swiper.slidePrev();
    }
  };

  const galleryItems = data && data.map((item, i) => {
    let thisItem;
    var imgs =["jpg", "jpeg", "gif", "tiff", "png", "webp"];
    var vids = ["mp4", "webm"];

    if( imgs.indexOf(item.guid.split('.').pop()) >= 0 )
    {
        thisItem =<GalleryItem><Img src={item.guid} alt={item.post_title} /></GalleryItem>;
    } else if ( vids.indexOf(item.guid.split('.').pop()) >= 0 )
    {
        thisItem = <GalleryItem><VideoPlayerNative playsInline={true} autoPlay={true} muted={true} loop={true} >
          <source src={item.guid} type="video/mp4" />
          </VideoPlayerNative></GalleryItem>;
    }

    return (
      <ImgDiv key={i} className="swiper-zoom-container">
        {thisItem}
      </ImgDiv>
    )
  })

  const params = {
    /*
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true
    },


    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev'
    },
        */
    slidesPerView: 'auto',
    centeredSlides: true,
    zoom: true,
    spaceBetween: 20
  }

  const arrowLink = state.frontity.url+ "/wp-content/uploads/2022/03/arrowUp.svg"
  return (<SwipeGallerySection className="container" >
    <PhotoDiv>
      <BgH1Div>
        <BgH1>
        <TextLoop noWrap={true} interval={1500}>
          <BgH1Span>Craftmanship</BgH1Span>{/*https://www.npmjs.com/package/react-text-transition*/}
          <BgH1Span>Making-of</BgH1Span>
          <BgH1Span>Thought Process</BgH1Span>
        </TextLoop>
        </BgH1>
      </BgH1Div>
    </PhotoDiv>
    <SwiperDiv ref={ref}>
      <Swiper {...params} >
        {galleryItems}
      </Swiper>
      <ArrowBtn onClick={goNext}><ArrowNext src={arrowLink} alt="Works" /></ArrowBtn>
    </SwiperDiv>
    <Global styles={css(externalCss)} />
  </SwipeGallerySection>

  );
};

export default connect(SwipeGallery);



const SwipeGallerySection = styled.section`
  height: auto;
  background: white;
  color: black;
  margin: 0 auto;
  width:100%;
  position:relative;
  overflow-x: hidden;
  padding: 20px 0;
`

const PhotoDiv = styled.div`
  position:relative;
  height: auto;
`

const Img = styled.img`
  display:block;
  height:100%;
  object-fit:cover;
  @media(orientation: portrait){
    height:100%;
  }
`
/*
&  div.swiper-button-next-custom {
  background-image: url(${require("../styles/arrowDown.svg")});
}
*/
const SwiperDiv = styled.div`
  width:100%;
  position: relative;
  left: 0;

  & > div {
    & > div {
      & > div {
        text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      justify-content: center;
      align-items: center;

      max-width: calc(40vw);
      height: calc(40vw / 1.33);
      @media(orientation: portrait){
        max-width: calc(60vw);
        height: calc(60vw / 1.33);
      }
    }
  }

  @media(orientation: portrait){
    width:100%;
    position: relative;
    left: 0;
    top: 0;
  }
}
`
const GalleryItem = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  margin-top:1px;
  border: 2px dashed #DBDBDB;
`;

const ImgDiv = styled.div`
  padding: 0 0 100px 0px;
  @media(orientation: portrait){
    padding: 20px 0 80px 0px;
  }

`
const BgH1Div = styled.div`
  overflow:hidden;
`

const BgH1 = styled.h1`
  text-align:right;
  margin-right: -3vw;
  overflow:hidden;
`

const BgH1Span = styled.div`
  width:100vw;
  overflow:hidden;
`
const VideoPlayerNative = styled.video`
  display: block;
  width:100%;
  height:100%;
  object-fit:cover;
  overflow:hidden;
`;


const ArrowBtn = styled.button`
    position:absolute;
    left: 64.5vw;
    top: calc(42vw / 1.33);
    background:none;
    width:40px;
    height:auto;
    z-index:1;
    @media(orientation: portrait){
      width:35px;
      left: 67vw;
      top: calc(72vw / 1.33);
    }
`;

const ArrowNext = styled.img`
  width:100%;
  height:auto;

`;
