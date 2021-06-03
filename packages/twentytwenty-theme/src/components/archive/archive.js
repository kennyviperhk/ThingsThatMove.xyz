import { connect, styled } from "frontity";
import React, { Fragment, useEffect } from "react";
import ArticleArtwork from "../post/post-item-artwork";
import ArticleStandard from "../post/post-item-standard";
import ArchiveHeader from "./archive-header";
import Pagination from "./archive-pagination";
import PostSeparator from "../post/post-separator";
import Post from "../post";

const Archive = ({ state, actions, showExcerpt, showMedia }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  // const { primary } = state.theme.colors;

  // Whether the show the excerpt instead of the full content
  // If passed as prop, we'll respect that. Else, we'll use the theme settings
  const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;


  const p = "landings/"
  const extraPostLink = `/${p}`;
  const landingData = state.source.get(extraPostLink);

  const p2 = "category/recent/"
  const extraPostLink2 = `/${p2}`;
  const dataHome = state.source.get(extraPostLink2);

  useEffect(() => {
    actions.source.fetch(extraPostLink);
    actions.source.fetch(extraPostLink2);
    Post.preload();
  }, []);


  let firstImageURL;
  let secondImageURL;
  let isArtworkPage;
  let isDesignPage;
  let isTechPage;
  let isHomePage;

  const firstDesc =  <JobDesc>
                    <JobDescTitle>
                      as an Artist
                    </JobDescTitle>
                    <JobDescDesc>
                      Kenny Wong creates both individual and collaborative works. In his individual work, he focuses on his interest in percep- tion and daily experiences, while his collaborative works are open and diverse, which expands his awareness to sur- roundings through art making, as well as artworks that can only be done by collaborative thoughts and knowledge.
                    </JobDescDesc>
                  </JobDesc>;
  const secondDesc = <JobDesc>
                      <JobDescTitle>
                        as a Designer and Technologist
                      </JobDescTitle>
                      <JobDescDesc>
                        Wong is both conceptually and technically enriched to collaborate as different roles in various projects. His projects are customized through technological system involve mechatronics, web technologies, computer graphics, animation and interactive elements.
                      </JobDescDesc>
                    </JobDesc>;

  const a = <ImgDiv key={"a"}><Img src={firstImageURL} /></ImgDiv>;
  const b = <ImgDiv key={"b"}><Img src={secondImageURL} /></ImgDiv>;


  isArtworkPage = (state.router.link === '/category/works/') ? true : false;
  isDesignPage = (state.router.link === '/category/designs/') ? true : false;
  isTechPage = (state.router.link === '/category/techs/') ? true : false;
  isHomePage = (data.isHome) ? true : false;
  if (landingData.isReady) {

      let landingURL, item;
      if (isArtworkPage) {
        landingURL = "/landings/works/";
      } else if (isDesignPage) {
        landingURL = "/landings/designs/";
      } else if (isTechPage) {
        landingURL = "/landings/techs/";
      } else if (isHomePage) {
        landingURL = "/landings/home/";
      } else {
        landingURL = "/landings/home/"; //TODO
      }

      var items = landingData.items.map(({ type, id, link }, index) => {
        if (link === landingURL) {
          item = state.source[type][id];
        }
      })

    firstImageURL = item.first_image.guid;
    secondImageURL = item.second_image.guid;
  }
/* Home */
  if (isHomePage && dataHome.isReady) {
    var size = 2;
    var items = dataHome.items.slice(0, size).map(({ type, id },index) => {
      //const isLastArticle = index === data.items.length - 1;
      const item = state.source[type][id];
      // Render one Item component for each one.
      return (
        <Fragment key={item.id}>
        <JobDescMobile>
          {index === 0? firstDesc: secondDesc}
          <JobDescImgMobile src={index === 0? firstImageURL: secondImageURL} />
          </JobDescMobile>
          <ArticleArtwork
            itemIndex={index}
            key={item.id}
            item={item}
            showExcerpt={_showExcerpt}
            showMedia={showMedia}
          />
        </Fragment>
      );
    })
  }


    if (isHomePage) {
      return (
        <HomePostSection>
          <HomeLeftDiv>
            {/* Iterate over the items of the list. */}
            {items}
            {
              /*
              data.totalPages > 1 && (
              <>
                <PostSeparator />
                <Pagination size="thin" />
              </>)
              */
            }
          </HomeLeftDiv>
          <HomeRightDiv>
            <HomeRightSubDiv>
              {firstDesc}
              <JobDescImg src={firstImageURL} />
            </HomeRightSubDiv>
            <HomeRightSubDiv>
              {secondDesc}
              <JobDescImgEven src={secondImageURL} />
            </HomeRightSubDiv>
          </HomeRightDiv>
        </HomePostSection>
      )
    }


  return (
    <>

      {/* If the list is a taxonomy, we render a title.
      {data.isTaxonomy && (
        <ArchiveHeader labelColor={primary} label={data.taxonomy}>
          <span>{decode(state.source[data.taxonomy][data.id].name)}</span>
        </ArchiveHeader>
      )
    */}

      {/* If the list is for a specific author, we render a title.
      {data.isAuthor && (
        <ArchiveHeader labelColor={primary} label="Author">
          <b>{decode(state.source.author[data.id].name)}</b>
        </ArchiveHeader>
      )
    */}

      {/* Iterate over the items of the list. */}


      <ArchiveSection>
        <ArticleDivLColumn>
          {data.items.map(({ type, id }, index) => {
            const isLastArticle = index === data.items.length - 1;
            const item = state.source[type][id];
            if (index < 2) {
              return (<Fragment key={item.id}>

                {index === 0 && [<ArticleArtwork itemIndex={index}
                  key={item.id}
                  item={item}
                  showExcerpt={_showExcerpt}
                  showMedia={showMedia} />]}
                {index === 1 && [<ArticleArtwork itemIndex={index}
                  key={item.id}
                  item={item}
                  showExcerpt={_showExcerpt}
                  showMedia={showMedia} />, b]}
              </Fragment>
              )
            }
          })
          }
        </ArticleDivLColumn>

        <ArticleDivRColumn>
          {data.items.map(({ type, id }, index) => {
            const isLastArticle = index === data.items.length - 1;
            const item = state.source[type][id];
            if (index >= 2 && index < 4) {
              return (<Fragment key={item.id}>
                {index === 2 && [a, <ArticleArtwork itemIndex={index}
                  key={item.id}
                  item={item}
                  showExcerpt={_showExcerpt}
                  showMedia={showMedia} />]}
                {index === 3 && [<ArticleArtwork itemIndex={index}
                  key={item.id}
                  item={item}
                  showExcerpt={_showExcerpt}
                  showMedia={showMedia} />]}
              </Fragment>
              )
            }
          })
          }
        </ArticleDivRColumn>

        <ArchivedProjectTitleDiv>
          {/*<h4>Archived Projects</h4>*/}
        </ArchivedProjectTitleDiv>
        <ArticleStandardDiv>

          {data.items.map(({ type, id }, index) => {
            const isLastArticle = index === data.items.length - 1;
            const item = state.source[type][id];
            if (index >= 4) {
              return (
                <Fragment key={item.id}>
                  <ArticleStandard
                    key={item.id}
                    item={item}
                    showExcerpt={_showExcerpt}
                    showMedia={showMedia}
                  />
                </Fragment>
              );
            }
          })
          }
        </ArticleStandardDiv>
        {data.totalPages > 1 && (
          <>
            <PostSeparator />
            <Pagination size="thin" />
          </>
        )}
      </ArchiveSection>
    </>
  );
};

export default connect(Archive);

export const ArchiveSection = styled.section`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width:100%;
  background:white;
  height:auto;
  @media(orientation: portrait){
    flex-flow: column;
    padding-bottom: 50px;
  }
`;

export const ArticleDivLColumn = styled.div`
  display: block;
  float:left;
  width:50%;
  @media(orientation: portrait){
    width:100%;
  }
  overflow: hidden;
`;

export const ArticleDivRColumn = styled.div`
  margin-top: 80px;
  display: block;
  float:right;
  width:50%;
  @media(orientation: portrait){
    width:100%;
    margin-top: 0px;
  }
`;

export const Img = styled.img`
  width:100%;
  min-height:100%;
  object-fit:cover;

`;

export const ImgDiv = styled.div`
  width:100%;
  height:85vh;
  display:flex;
  position:relative;
  @media(orientation: portrait){
    width:100%;
    height:calc(100vw * 0.33);
    display:none;
  }
`

export const ArticleStandardDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 100px 100px 100px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content:center;
  @media(orientation: portrait){
    flex-flow: row;
    padding: 0px 0px;
      flex-wrap: wrap;
  }
`

export const ArchivedProjectTitleDiv = styled.div`
  width:100%;
  text-align:center;
  color: black;
  padding: 80px 0 40px 0;

  @media(orientation: portrait){
  padding: 50px 0 20px 0;
  }
`








/*HOME*/



const postHeightOdd = 'calc(50vw * 1.0 * 0.9)'
const postHeightOddMobile = 'calc(50vw * 1.0 * 0.9)'
const postHeightEven = 'calc(50vw * 1.0 * 1.2)';


const HomePostSection = styled.section`
  position: relative;
  display: flex;
  background:white;
transition: all 1s;
  @media(orientation: portrait){
      width: 100%;
      flex-flow: column;
  }
`;

const HomeLeftDiv = styled.div`
  position: relative;
  width: 50%;
  @media(orientation: portrait){
      width: 100%;
  }
`;

const HomeRightDiv = styled.div`
  position: relative;
  width: 50%;
  @media(orientation: portrait){
      width: 100%;
      display:none;
  }
`;

const HomeRightSubDiv = styled.div`
  width:100%;
  display: flex:
  flex-flow: column;
  overflow:hidden;
  justify-content:center;

  &:nth-of-type(odd){
    color:black;
    background: white;
    height: ${postHeightOdd};
  }
  &:nth-of-type(even){
    color:white;
    background: black;
    height: ${postHeightEven};
  }
`;

const JobDesc = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0;
  justify-content:center;
  padding-left: 15%;
  padding-right: 60px;
  padding-top:calc(${postHeightOdd} / 5 );
  height: 50%;
  transition: all 0.5s;
  @media(orientation: portrait){
    padding: 20px 15px;
    height: auto;
    flex-flow: column;
  }
`;


const JobDescTitle = styled.span`
  position:relative;
  flex: 0 0 150px;
  @media(orientation: portrait){
    flex: 0 0 0px;
  }
`;

const JobDescDesc = styled.p`
  flex-grow: 1;
  position:relative;
  height: 100%;
`;

const JobDescImg = styled.img`
  min-width:100%;
  object-fit: cover;
  height: 50%;
  background: black;
`;

const JobDescImgEven = styled.img`
  min-width:100%;
  object-fit: cover;
  height: calc(50vw * 1.0 * 1.2 / 2);
`;


const JobDescMobile = styled.div`
  display:none;
  @media(orientation: portrait) {
      display:  flex;
      flex-flow: column;
      &:nth-of-type(odd){
        color:black;
        background: white;
      }
      &:nth-of-type(even){
        color:white;
        background: black;
      }
  }

`;
const JobDescImgMobile = styled.img`
  display:none;
  @media(orientation: portrait){
      display:flex;
      height: calc(100vw / 3);
      object-fit: cover;
      min-width: 100%;
  }
`;
