import React from "react";
import { connect, styled, css } from "frontity";
import Link from "../link";
import FeaturedMedia from "./featured-media-home-artwork";
import PostMeta from "./post-meta";
//import PostCategories from "./post-categories";
import PostTags from "./post-tags";
//import ArrowSVG from "../styles/arrowUp.svg"

/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItemArtwork = ({
  state,
  item,
  libraries,
  showExcerpt,
  showMedia = true,
  itemIndex
}) => {
  // Get all categories
  const allCategories = state.source.category;
  const data = state.source.get(state.router.link);
  /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
  const categories =
    item.categories && item.categories.map(catId => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;
  /**
   * The item's categories is an array of each tag id
   * So, we'll look up the details of each tag in allTags
   */
  const tags = item.tags && item.tags.map(tagId => allTags[tagId]);

  const content = showExcerpt ? item.excerpt : item.content;
  const { Component: Html2React } = libraries.html2react;
  const arrowLink = state.frontity.url+ "/wp-content/uploads/2022/03/arrowUp.svg"
  let isPostOnLeft = true;

  let isArtworkPage;
  let isDesignPage;
  let isTechPage;
  let isHomePage;

  isArtworkPage = (state.router.link === '/category/works/') ? true : false;
  isDesignPage = (state.router.link === '/category/designs/') ? true : false;
  isTechPage = (state.router.link === '/category/techs/') ? true : false;
  isHomePage = (data.isHome) ? true : false;

  let bgColor = '#333333';
if(isHomePage){
  if (itemIndex == 0) {
    bgColor = '#F2F2F2';
  } else if (itemIndex == 1) {
    bgColor = '#DBDBDB';
  } else if (itemIndex == 2) {
    bgColor = '#F2F2F2';
  } else {
    bgColor = '#DBDBDB';
  }
}else{
  if (itemIndex == 0) {
    bgColor = '#F2F2F2';
  } else if (itemIndex == 1) {
    bgColor = '#FFFFFF';
  } else if (itemIndex == 2) {
    bgColor = '#F2F2F2';
  } else {
    bgColor = '#DBDBDB';
  }

}


  return (
    <Post key={itemIndex} css={css`background: ${bgColor}`}>
      <PostLink link={item.link} >
        <PostHeader>
          {state.theme.featuredMedia.showOnArchive && showMedia && (
            <FeaturedMedia id={item.featured_media} />
          )}
          <SectionDiv>
            <PostTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <PostTitle>{item.chinese_title}</PostTitle>
            <PostTagsTitle>{tags.map((tagId, i, arr) => (tagId['name'] + (arr.length - 1 === i ? '' : ' / ')))}</PostTagsTitle>
          </SectionDiv>
        </PostHeader>
        <Arrow src={arrowLink} alt="Works" />
      </PostLink>
    </Post>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItemArtwork);
// All styles :)

export const Post = styled.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  text-align:center;
  width: calc(50vw * 1.0);
  height: calc(50vw * 1.0 * 0.9);
    min-height:60vh;
  @media(orientation: portrait){
    width: 100%;
    height: auto;
    padding-bottom:50px;
  }

`;

/*
&:nth-of-type(1){
  background: #F2F2F2;

}
&:nth-of-type(2){
  background: white;

}
&:nth-of-type(3){
  background: #F2F2F2;

}
&:nth-of-type(4){
  background: #DBDBDB;
}
*/

export const PostHeader = styled.header`
  text-align: center;
  width: 100%;
`;

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem"
};

const getMaxWidth = props => maxWidths[props.size] || maxWidths["medium"];

export const SectionDiv = styled.div`

  padding-top: 25px;
  width: calc(50vw * 0.45);

  @media(orientation: portrait){
    width: calc(100vw * 0.65);
  }
`;

export const PostTitle = styled.h4`
  text-align: left;
  line-height:1.4em;
  margin: 25px 0 10px 0;
  padding-right: 15%;
  margin: 0 0 ;
@media(orientation: portrait){
  margin: 0px 0 5px 0;
  text-align:left;
}
`;
export const PostTagsTitle = styled.h5`
  color: #707070;
  font-weight: 200;
  font-size: 15px;
  line-height:25px;
  margin: 5px auto;
  text-align: left;
`;

const PostLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  margin: 0 auto;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
  width: calc(50vw * 0.45);
  @media(orientation: portrait){
    width: calc(100vw * 0.65);
  }
`;

export const PostInner = styled(SectionDiv)`
  padding-top: 5rem;
  width: calc(50vw * 0.45);

  @media(orientation: portrait){
    width: calc(100vw * 0.65);

  }
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  max-width: 58rem;

  letter-spacing: normal;

  @media (min-width: 700px) {
    font-size: 2.1rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 0 0;
    padding: 20px 0;
    max-width: 100%;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 30px;
  right: 50px;
  width: 40px;
`;
