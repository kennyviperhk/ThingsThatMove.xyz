import { connect, styled } from "frontity";
import React from "react";

const TwoColumnGallery = ({ state, actions, libraries, data }) => {

  const galleryItems = data && data.map((item, i) => {
    return (
      <ImgDiv key={i}>
        <Img src={item.guid} alt={item.post_title} />
      </ImgDiv>
    )
  })

  return (<TwoColumnGallerySection >
    <GalleryDiv>
      {galleryItems}
    </GalleryDiv>
  </TwoColumnGallerySection>

  );
};

export default connect(TwoColumnGallery);


const TwoColumnGallerySection = styled.section`
  background: white;
  color: black;
  margin: 0 0;
  padding: 0.5px 0;
  width: 100%;
  position:relative;
  overflow-x:hidden;
  @media(orientation:portrait){
    padding: 10px 0;
  }
`

const Img = styled.img`
  width: 50vw;
  height: calc(50vw);
  object-fit:cover;
`

const GalleryDiv = styled.div`
  width:100%;
  display: flex;
  flex-flow: row;
  align-items: center;
`

const ImgDiv = styled.div`
  width: 50%;
`
