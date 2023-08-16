import { connect, styled} from "frontity";
import React from "react";
import Link from "../link";

const ServiceIntro = ({ state, actions }) => {
    return <ServiceIntroSection className="container" >
      <JobTitles>
        <JobTitleDiv><JobTitleH1><JobTitleLink link="/category/works/">We do</JobTitleLink></JobTitleH1></JobTitleDiv>
        <JobTitleDiv><JobTitleH1><JobTitleLink link="/category/works/">Kinetic Art</JobTitleLink></JobTitleH1></JobTitleDiv>
        <JobTitleDiv><JobTitleH1><JobTitleLink link="/category/works/">Interactive Design</JobTitleLink></JobTitleH1></JobTitleDiv>
        <JobTitleDiv><JobTitleH1><JobTitleLink link="/category/works/">Robotics</JobTitleLink></JobTitleH1></JobTitleDiv>
        <JobTitleDiv><JobTitleH1><JobTitleLink link="/category/works/">Technical Consultancy</JobTitleLink></JobTitleH1></JobTitleDiv>
        <JobTitleDiv><JobTitleH1><JobTitleLink link="/category/works/">Creative and Research</JobTitleLink></JobTitleH1></JobTitleDiv>
      </JobTitles>
      <JobDesc>
        <JobDescTitle>
            {/*  */}
        </JobDescTitle>
        <JobDescP>
        {/* Wong is both conceptually and technically enriched to collaborate as different roles in various projects. His projects involve electronics, mechanics, programming, computer graphics, animation and visual effects.*/}
        </JobDescP>
      </JobDesc>
    </ServiceIntroSection>;
}


export default connect(ServiceIntro);

const sectionHeight = '60vh';
const jobTitleFontSize = '5vw';
const jobTitleFontSizeMobile = '7vw';

const ServiceIntroSection = styled.section`
  min-height: ${sectionHeight};
  background: black;
  color: white;
  @media(orientation: portrait){
      height: auto;
      min-height: auto;
      max-height: ${sectionHeight};
      padding-bottom: 20px;
      padding-top: 40px;
  }
`;

const JobTitleDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height:100%;

  &:nth-of-type(2n){
    text-align:left;
    padding-left:12vw;
    @media(orientation: portrait){
      padding-left:0;
      text-align:right;

    }
  }
  &:nth-of-type(2n+1){
    text-align:right;
    @media(orientation: portrait){
      text-align:right;
    }
  }

    &:nth-of-type(1){
      text-align:left;

    }

`;

const JobDesc = styled.div`
  position: absolute;
  display:inline-flex;
  width: 50%;
  max-width:900px;
  margin-top: 30px;
  padding-left: 7.5%;
  padding-right: 0;
  left:50%;
  @media(orientation: portrait){
    position:relative;
    left:0;
    width: 100%;
    padding: 0 15px;
    display: flex;
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

const JobDescP = styled.p`
  flex-grow: 1;
  position:relative;
`;

const JobTitles = styled.div`

  width: 100%;
  padding: 0px 30px;
  background:black;
  @media(orientation: portrait){
    position:relative;
      padding: 0px 15px;
  }
`;


const JobTitleH1 = styled.h1`
  position: relative;
  display: block;
  font-family: "Archiv Grotesk", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
  Helvetica, sans-serif;
  font-size: ${jobTitleFontSize};
  width: 100%;
  height: auto;
  letter-spacing: 0.3vw;
  text-transform:none;
  white-space:nowrap;
  @media(orientation: portrait){
    font-size: ${jobTitleFontSizeMobile};
    line-height: 0.4em;
  }
`

const JobTitleLink = styled(Link)`
  color:white;
  text-decoration: none;
  & :hover{
    text-decoration: underline;
  }
`
