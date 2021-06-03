import { connect, decode, Global, css } from "frontity";
import React, { Component, Fragment, useEffect } from "react";
import { styled, keyframes } from "frontity";
import {getMediaAttributes} from '../../helpers'
import Link from "../link";




const SwipeGallery = ({ state, actions, libraries, data }) => {

//console.log(getMediaAttributes(state, 2842).src)
//  if (!media) return null;
    return (<SwipeGallerySection className="container" >
      <PhotoDiv>
        <p>Craftmenship</p>
      </PhotoDiv>
    </SwipeGallerySection>

  );
};

export default connect(SwipeGallery);

const sectionHeight = '80vh';
const jobTitleFontSize = '6vw';


const SwipeGallerySection = styled.section`
  height: 60vh;
  background: white;
  color: black;
  margin: 0 auto;
  width:100%;
`

const PhotoDiv = styled.div`

`
