import { connect, styled } from "frontity";
import React from "react";
import Link from "../link";

//import externalCss from './triangle-landing.css'
const ShowAllPosts = ({ state, actions }) => {

    return <ShowAllPostsSection className="container" >
      <BigLinkDiv>
        <BigLink link="/category/projects">Show All Projects</BigLink>
      </BigLinkDiv>
    </ShowAllPostsSection>;

}

export default connect(ShowAllPosts);

const sectionHeight = '80vh';
const jobTitleFontSize = '6vw';

const ShowAllPostsSection = styled.section`
  height: 60vh;
  background: white;
  color: black;
  margin: 0 auto;
  width:100%;
  @media(orientation: portrait) {
        height: 40vh;
  }

`

const BigLinkDiv = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(orientation: portrait) {
        height: 40vh;
  }
`

const BigLink = styled(Link)`
  margin: 0 auto;
  text-align: center;
  color: black;
  font-size: 4vw;
  width:100%;
  font-weight: 300;
    @media(orientation: portrait) {
        font-size: 8vw;
    }
`;
