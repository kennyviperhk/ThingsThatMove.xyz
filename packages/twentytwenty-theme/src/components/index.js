import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
//import React,{ lazy } from "react";
import React from "react";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import Archive from "./archive";
import Home from "./home";
import Loading from "./loading";
import Post from "./post";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";
import PageError from "./page-error";
import TriangleLanding from './triangle-landing/'
import animateCSS from './styles/animate.min.css'
import ReactGA from 'react-ga';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */

const Theme = ({ state, libraries }) => {
  // Get information about the current URL.
  //const API = typeof window !== 'undefined' ? window.API: NodeAlternative;

  //ReactGA.initialize("G-KTGYYHMCR0");
  //ReactGA.pageview(state.router.link);
/*
  global.requestAnimationFrame = function(callback) {
    console.log("requestAnimationFrame callback")
    setTimeout(callback, 0);
  };
  */
  const data = state.source.get(state.router.link);
  //console.log(data)
  const parse = libraries.source.parse(state.router.link);
  // Check if the url is a search type
  const isSearch = Boolean(parse.query["s"]);

  return (
    <>
      {/* Add global styles for the whole site, like body or a's or font-faces.
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}

      <Global styles={globalStyles(state.theme.colors)} />
      <Global styles={animateCSS} />


      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="viewport" contentWidth="device-width" initialScale={1.0} maximumScale={1.0} userScalable="no" />
        <link rel="preconnect" href="https://www.blog.thingsthatmove.xyz" />
        <link rel="preconnect" href="https://blog.thingsthatmove.xyz" />
        <html lang="en" />
        <script>{`/*
          //document.write('<div style="margin: 0 auto; height:45vh; z-index:-1"><SVG id="triangle" width="100%" height="100px" viewBox="-3 -4 39 39"><Polygon fill="#fff" stroke="#333333" stroke-width="1" points="16,0 32,32 0,32"></Polygon></SVG></div>');
          var tid = setInterval( function () {
              if ( document.readyState !== 'complete' ) {
                console.log("not ready")
                return;
              }
              clearInterval( tid );
              console.log(" ready")
              document.getElementById("triangle").style.visibility = "hidden";
          }, 100 );
          */`}</script>
      </Head>

      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
          <Header />
        {/* Add the header of the site. */}
          <TriangleLanding />
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main">
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={isSearch} />
            <Home when={data.isHome} />
            <Archive when={data.isArchive} />
            <Post when={data.isPostType} />
            {/*  <PageError when={data.isError} />*/}
          </Switch>
        </Main>
      </div>

      <Footer />
      <FontFaces />
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  display: block;
`;
