import React, { useEffect, Suspense } from "react";
import { connect, styled } from "frontity";

import ServiceIntro from "../service-intro";
import HomePosts from "../archive";
import ShowAllPosts from "../show-all-posts";
import { useWindowSize } from "../../helpers";

import Archive from "../archive";
import Post from "../post";
import Loading from "../loading"; // your animated loader

const Home = () => {
  const size = useWindowSize();

  useEffect(() => {
    Post.preload();
    Archive.preload();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <HomeSection className="container">
        <ServiceIntro />
        <HomePosts />
        <ShowAllPosts />
      </HomeSection>
    </Suspense>
  );
};

export default connect(Home);

const HomeSection = styled.section\`
  position: relative;
  top: 0px;
\`;
