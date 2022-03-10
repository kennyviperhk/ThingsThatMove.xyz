import { connect, styled } from "frontity";
import React from "react";

const FullWidthGallery = ({ state, actions, libraries, data }) => {
  //https://openbase.io/js/react-id-swiper

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


  return (<FullWidthGallerySection >
    <GalleryDiv>
      {galleryItems}
    </GalleryDiv>
  </FullWidthGallerySection>
  );
};

export default connect(FullWidthGallery);


const FullWidthGallerySection = styled.section`
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
  width: 100vw;
  height: calc(100vw / 1.77);
  object-fit:cover;
`

const GalleryDiv = styled.div`
  width:100%;
  display: flex;
  flex-flow: column;
  align-items: center;

`

const ImgDiv = styled.div`
  width: 100%;
  padding: 0.5px 0px;
`

const VideoPlayerNative = styled.video`
  display: block;
  width:100%;
  overflow:hidden;
  object-fit: cover;
`;
