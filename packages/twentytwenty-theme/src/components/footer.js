import React, { useEffect } from "react";
import { styled, connect, css } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import Loading from "./loading";
import ArrowSVG from "./styles/arrowUpWhite.svg"

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = event => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a css={css`text-decoration:none`} href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state, actions }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;


  //let uri = "mailto:me@thingsthatmove.xyz"
  const p = "landings/";
  const extraPostLink = `/${p}`;
  let landingData = state.source.get(extraPostLink);
  useEffect(() => {
    actions.source.fetch(extraPostLink);
  }, []);

  let landingURL, item;
  landingURL = "/landings/footer/";
  if (landingData.isReady) {
    var items = landingData.items.map(({ type, id, link }, index) => {
      if (link === landingURL) {
        item = state.source[type][id];
      }
    })
  }

  return landingData.isReady ? (
    <SiteFooter bg={footerBg} role="contentinfo">
      <Credits>
        <Copyright>
          &copy; {currentYear}{" "}
          <Link css={css`text-decoration:none`} link={state.frontity.url}>{state.frontity.title}</Link>
        </Copyright>
        <BackToTopDiv>
          <BackToTop />
        </BackToTopDiv>
      </Credits>
      <SiteFooterInner>
        <CollaborateDiv>
        <BigTxt>Let's Collaborate</BigTxt>
        <MailLinkDiv><MailLink><Img src={ArrowSVG} alt="email_me"/><LinkSpan>&#109;&#101;&#64;&#116;&#104;&#105;&#110;&#103;&#115;&#116;&#104;&#97;&#116;&#109;&#111;&#118;&#101;&#46;&#120;&#121;&#122;</LinkSpan></MailLink></MailLinkDiv>
        </CollaborateDiv>
    </SiteFooterInner>
      <SubMenu>
        <SubMenuTitleDiv ><TitleLink target="_blank" link="https://www.facebook.com/thingsthatmove.xyz/" onClick={e => changePage(e)}>Facebook</TitleLink></SubMenuTitleDiv>
        <TitleDivHr><HrLine></HrLine></TitleDivHr>
        <SubMenuTitleDiv ><TitleLink target="_blank" link="https://www.instagram.com/thingsthatmove.xyz/" onClick={e => changePage(e)}>Instagram</TitleLink></SubMenuTitleDiv>
        <TitleDivHr><HrLine></HrLine></TitleDivHr>
        <SubMenuTitleDiv ><TitleLink target="_blank" link="https://vimeo.com/thingsthatmove" onClick={e => changePage(e)}>Vimeo</TitleLink></SubMenuTitleDiv>
      </SubMenu>
      <BgImg src={item.foreground_media[0].guid} />
    </SiteFooter>
  ): <Loading />;
}

export default connect(Footer);

const SiteFooter = styled.footer`
margin: 0;
padding: 0;
z-index:1;
background-color: black;
color: #000000;
height:60vh;
object-fit: cover;
position:relative;
overflow:hidden;

`;
const SiteFooterInner = styled.div`
text-align: center;
position:absolute;
width:100vw;
top:0;
`;

const BigTxt = styled.h1`
color: white;
position:relative;
top:0;
font-family: "Archiv Grotesk", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
font-size: 4.5vw;
line-height: 4.5vw;
text-align: center;
width: auto;
z-index:2;
letter-spacing: 0.1vw;
@media(orientation: portrait) {
  font-size: 8vw;
  text-align:left;
  padding-left:15px;
}
`;

const BgImg = styled.img`
min-width: 70vw;
margin: 20vh auto 0 auto;
padding-bottom:0;
height: 40vh;
object-fit: contain;

`;

const BackToTopDiv = styled.div`
position:absolute;
margin: 0;
position: absolute;
top:50vh;
right:10vw;
@media(orientation: portrait) {
  top:55vh;
  right:0;
  padding-right:15px;
}
`;

const Credits = styled.div`
color:white;
width:100%;
position:relative;

`;


const Copyright = styled.p`
font-weight: 500;
margin: 0;
position: absolute;
top:50vh;
left:10vw;

@media(orientation: portrait) {
  top:55vh;
  left:0;
  padding-left:15px;
}
`;



/*  mix-blend-mode: difference;*/
const SubMenu = styled.div`
top:35vh;
text-decoration: none;
mix-blend-mode: normal;
position: absolute;
width: 100%;
height: 60px;
z-index: 1;
display: flex;
justify-content: space-between;
overflow:hidden;
padding: 10px 15px 10px 15px;

@media(orientation: portrait){
  flex-flow:column;
  height: 150px;
  top:18vh;
  width: auto;
  padding: 10px 0 10px 0;
}
transition: all 1.0s;
`;


const SubMenuTitleDiv = styled.div`
text-align:center;
width:210px;
&:nth-of-type(1){
  text-align:left;
}
&:nth-of-type(3){
  width:300px;
}
&:nth-of-type(5){
  text-align:right;
}
text-shadow: -1px -1px 0px rgba(255,255,255,0.0),1px -1px 0px rgba(255,255,255,0.0),-1px 1px 0px rgba(255,255,255,0.0),1px 1px 0px rgba(255,255,255,0.2);

@media(orientation: portrait){
  margin: 0 0;
  height:38px;

  &:nth-of-type(1){

    text-align:left;
  }
  &:nth-of-type(3){
    width:auto;
    text-align:left;
  }
  &:nth-of-type(5){
    text-align:left;
  }
}
color:white;
`;

const TitleDivHr = styled.div`
flex-grow:1;
margin-top: -20px;
@media(orientation: portrait){
  border-left: 2px solid white;
  left:50%;
  position:relative;
  margin-top: 10px;
  display:none;
}
`;

const HrLine = styled.hr`
border: none;
height: 1px;
/* Set the hr color */
color: white; /* old IE */
background-color: white; /* Modern Browsers */
@media(orientation: portrait){
  display:none;
}
`;
const subMenuFontSize = '20px';

const TitleLink = styled(Link)`

color: white;
mix-blend-mode: normal;
display: block;
font-size: ${subMenuFontSize};
font-weight:500;
white-space: nowrap;
text-decoration: none;
padding:5px 45px 15px 45px;
&:hover {
  text-decoration: underline;
}
&:active{
  color: white;
}
@media(orientation: portrait){
  padding: 2px 15px 0px 15px;

}
`;


const Img = styled.img`

  height:13px;
  width:auto;
  padding-right:10px;

`;

const MailLinkDiv = styled.div`
  display:flex;
  align-self:end;

`;

const CollaborateDiv = styled.div`
  width:auto;
  display:flex;
  flex-flow:column;
  margin: 0 auto;
  width:max-content;
`;


const LinkSpan = styled.span`
  font-size:15px;
  text-decoration:underline;
  height:15px;
  line-height:12px;
`;


const MailLink = styled.div`
color: white;
font-weight:500;
white-space: nowrap;
padding:0;
text-decoration: underline;
display:flex;
&:hover {
  text-decoration: underline;
}
&:active{
  color: white;
}
@media(orientation: portrait){
}
`;
