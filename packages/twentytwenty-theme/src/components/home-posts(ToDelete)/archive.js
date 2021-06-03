import { connect, styled } from "frontity";
import React, { Fragment, useEffect } from "react";
import Article from "../post/post-item-home";
import Loading from "../loading";
import Post from "../post";

const Archive = ({ state, actions, showMedia }) => {
  // Get the data of the current list.
  //  const data = state.source.get(state.router.link);
  //const { primary } = state.theme.colors;

  // Whether the show the excerpt instead of the full content
  // If passed as prop, we'll respect that. Else, we'll use the theme settings
  const _showExcerpt = actions || !state.theme.showAllContentOnArchive;

  //get posts
  const p = "category/recent/"
  const extraPostLink = `/${p}`;
  const data = state.source.get(extraPostLink);

  //get photos
  const p2 = "landings/"
  const extraPostLink2 = `/${p2}`;
  const landingData = state.source.get(extraPostLink2);

  useEffect(() => {
    actions.source.fetch(extraPostLink);
    actions.source.fetch(extraPostLink2);
    Post.preload();
  }, []);

  let firstImageURL;
  let secondImageURL;
  if (landingData.isReady) {
    let item;
    let landingURL = "/landings/home/";
    let items = landingData.items.map(({ type, id, link }, index) => {
      if (link === landingURL) {
        item = state.source[type][id];
      }
    })
    firstImageURL = item.first_image.guid;
    secondImageURL = item.second_image.guid;
  }

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

  if (data.isReady) {
    var size = 2;
    var items = data.items.slice(0, size).map(({ type, id },index) => {
      //const isLastArticle = index === data.items.length - 1;
      const item = state.source[type][id];
      // Render one Item component for each one.
      return (
        <Fragment key={item.id}>
        <JobDescMobile>
          {index === 0? firstDesc: secondDesc}
          <JobDescImgMobile src={index === 0? firstImageURL: secondImageURL} />
          </JobDescMobile>
          <Article
            key={item.id}
            item={item}
            showExcerpt={_showExcerpt}
            showMedia={showMedia}
          />
        </Fragment>
      );
    })
  }

  if (data.isReady) {
    return (
      <HomePostSection>
        <LeftDiv>
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
        </LeftDiv>
        <RightDiv>
          <RightSubDiv>
            {firstDesc}
            <JobDescImg src={firstImageURL} />
          </RightSubDiv>
          <RightSubDiv>
            {secondDesc}
            <JobDescImgEven src={secondImageURL} />
          </RightSubDiv>
        </RightDiv>
      </HomePostSection>
    )
  };
  return <Loading when={data.isFetching} />;
};

export default connect(Archive);

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

const LeftDiv = styled.div`
  position: relative;
  width: 50%;
  @media(orientation: portrait){
      width: 100%;
  }
`;

const RightDiv = styled.div`
  position: relative;
  width: 50%;
  @media(orientation: portrait){
      width: 100%;
      display:none;
  }
`;

const RightSubDiv = styled.div`
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
