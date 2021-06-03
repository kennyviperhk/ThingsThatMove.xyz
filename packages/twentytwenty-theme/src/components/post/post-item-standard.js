import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "./featured-media-standard";
import PostMeta from "./post-meta";
//import PostCategories from "./post-categories";
import PostTags from "./post-tags";

/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItemStandard = ({
  state,
  item,
  libraries,
  showExcerpt,
  showMedia = true
}) => {
  // Get all categories
  const allCategories = state.source.category;
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



  return (
    <Post>
      <PostLink link={item.link}>
        <PostHeader>
          {state.theme.featuredMedia.showOnArchive && showMedia && (
            <FeaturedMedia id={item.featured_media} />
          )}
          <SectionContainer>
            <PostTitle dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            <PostTitle>{item.chinese_title}</PostTitle>
            <PostTagsTitle>{tags.map((tagId, i, arr) => (tagId['name'] + (arr.length - 1 === i ? '' : ' / ')))}</PostTagsTitle>
          </SectionContainer>
        </PostHeader>
      </PostLink>
    </Post>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItemStandard);
// All styles :)

export const Post = styled.div`
  position: relative;
  text-align:center;
  height: auto;
  width: 33.33%;
  background: white;
  @media(orientation: portrait){
    height: auto;
    width: 50%;
  }
`;


export const PostHeader = styled.div`
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

export const SectionContainer = styled.div`
  padding-top:25px;
  width: calc(22vw);
  @media(orientation: portrait){
    padding-top:10px;
    width: calc(35vw);

  }
`;

export const PostTitle = styled.h4`
text-align: left;
line-height:1.4em;
margin: 25px 0 10px 0;
padding-right: 15%;
  margin: 0 0 ;
  @media(orientation: portrait){
    margin: 0.5em auto;
  }

`;
export const PostTagsTitle = styled.h5`
  color: #707070;
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
  margin: 5px auto;
  text-align: left;
`;

const PostLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostInner = styled(SectionContainer)`
  padding-top: 5rem;

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
