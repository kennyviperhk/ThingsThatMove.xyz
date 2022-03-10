import { connect, styled } from "frontity";
import React from "react";


const BigVerticalGallery = ({ state, actions, libraries, data }) => {

  const galleryItems = data && data.map((item, i) => {
    let thisItem;
    var imgs =["jpg", "jpeg", "gif", "tiff", "png", "webp"];
    var vids = ["mp4", "webm"];

    if( imgs.indexOf(item.guid.split('.').pop()) >= 0 )
    {
        thisItem = <Img src={item.guid} alt={item.post_title} />;
    } else if ( vids.indexOf(item.guid.split('.').pop()) >= 0 )
    {
        thisItem = <VideoPlayerNative playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src={item.guid+"#t=0.1"} type="video/mp4" />
          </VideoPlayerNative>;
    }

    return (
      <ImgDiv key={i}>
        {thisItem}
      </ImgDiv>
    )
  })



  return (<BigVerticalGallerySection >
    <GalleryDiv>
        {galleryItems}
    </GalleryDiv>
  </BigVerticalGallerySection>

  );
};

export default connect(BigVerticalGallery);

const BigVerticalGallerySection = styled.section`
  background: white;
  color: black;
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  position:relative;
  overflow-x:hidden;
  padding: 20px 0;

`

const Img = styled.img`
  width: 80vw;
  height: calc(80vw / 1.77);
  object-fit:cover;
  @media(orientation: portrait){
    width: 90vw;
    height: calc(90vw / 1.77);
  }
`

const GalleryDiv = styled.div`
  width:100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 80px 0;
  @media(orientation: portrait){
    padding: 40px 0;
  }
`

const ImgDiv = styled.div`
  width: 80%;
  padding: 20px 0;
  @media(orientation: portrait){
    padding: 10px 0;
      width: 90%;
  }
`

const VideoPlayerNative = styled.video`
  display: block;
  width:100%;
  overflow:hidden;
  object-fit: cover;
`;
