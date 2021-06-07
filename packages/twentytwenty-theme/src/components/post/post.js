import { styled, connect } from "frontity";
import React, { useEffect } from "react";
import FeaturedMedia from "./featured-media";
import ShowAllPosts from '../show-all-posts'
import {
  EntryContent,
  Post as _Post,
  PostHeader,
  PostInner,
  PostTitle,
  SectionContainer
} from "./post-item";
import PostCategories from "./post-categories";
import PostMeta from "./post-meta";
import PostTags from "./post-tags";
import Loading from "../loading";

//shared
import SwipeGallery from '../swipe-gallery'
//import PostEntryMedia from './post-entry-media'

//bio
import BioTextSection from "../bio-text-section";
import AchievementList from "../achievement-list"

//Post
import PostVideoText from '../post-video-text'
import FullWidthGallery from '../full-width-gallery'
import BigVerticalGallery from '../big-vertical-gallery'
import TwoColumnGallery from '../two-column-gallery'
import Acknowledgment from "../acknowledgment"
import TechInfo from "../tech-info"
//import ModelViewer from"../model-viewer"
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the data of the author.
  // const author = state.source.author[post.author];
  // Get a human readable date.
  // const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get all categories
  const allCategories = state.source.category;
  /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
  const categories =
    post.categories && post.categories.map(catId => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;
  /**
   * The item's categories is an array of each tag id
   * So, we'll look up the details of each tag in allTags
   */
  const tags = post.tags && post.tags.map(tagId => allTags[tagId]);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  // Load the post, but only if the data is ready.

  const isBioPage = (state.router.link === '/bio/') ? true : false;

  if (isBioPage) {
    return data.isReady ? (
      <PostArticle>
        <BioTextSection data={post} />
        <AchievementList data={post} />
        {/*<PostEntryMedia id={post.gallery} />*/}
        <SwipeGallery data={post.gallery} />
      </PostArticle>
    ) : null;
  }

  return data.isReady ? (
    <PostArticle>
      <Header>
        <SectionContainer>
          {/* If the post has categories, render the categories */}
          {/*post.categories && <PostCategories categories={categories} />*/}
          {/*  <PostTitle
              as="h1"
              className="heading-size-1"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          */}


          {/* The post's metadata like author, publish date, and comments
<PostMeta item={post} />
            */}
        </SectionContainer>
      </Header>
      {post.is_tech === "1"  ?  <TechInfo data={post.tech_info} /> : ""}
      <PostVideoText concept={post.concept} video={post.main_documentation_video} />
      <FullWidthGallery data={post.full_width_gallery} />
        {post.is_secondary_vid === "1"} {/*TODO*/}
        {post.is_secondary_desc === "1" ? <PostVideoText isSecondary={true} concept={post.secondary_desc} video={post.secondary_documentation_video} /> : ""} {/*TODO*/}
      <BigVerticalGallery data={post.big_vertical_gallery} />
      <TwoColumnGallery data={post.two_column_gallery} />

      {post.is_secondary_two_column === "1" ? <TwoColumnGallery data={post.secondary_two_column_gallery} /> : ""}
      {post.is_swipe === "1" ? <SwipeGallery data={post.swipe_gallery} /> : ""}
      {post.is_acknowledgment === "1" ?   <Acknowledgment data={post.acknowledgment} /> : ""}

      {post.is_exhibition_record === "1" ? "" : ""} {/*TODO*/}
      {post.is_related_post === "1" ? "" : ""} {/*TODO*/}
      //{post.is_3d_model === "1" ? <ModelViewer data={post.model_viewer} /> : ""}
      <ShowAllPosts />
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */
      }
      {/*state.theme.featuredMedia.showOnPost && (
        <FeaturedImage id={post.featured_media} isSinglePost={true} />
      )*/}

      {/* If the post has an excerpt (short summary text), we render it */}
      {/*post.content && (
        <PostInner size="thin">
          <EntryContent>
            <Html2React html={post.content.rendered} />
          </EntryContent>

        </PostInner>
      )*/}

      {/* If the post has tags, render it */}
      {/*post.tags && <PostTags tags={tags} />*/}
    </PostArticle>
  ) : <Loading/>;
};

export default connect(Post);

const Header = styled(PostHeader)`
  background-color: #000;
  margin: 0;
  display:none;
`;

const PostArticle = styled(_Post)`
  padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 0 !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    background: #000;
    content: "";
    display: block;
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    top: 0;
  }
`;
