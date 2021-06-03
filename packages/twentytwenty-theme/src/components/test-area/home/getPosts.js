import {connect, decode, Global, css} from "frontity";
import React, {Component, Fragment, useEffect} from "react";

import {styled} from "frontity";

const SomePost = ({ state, actions }) => {
////  const postItem = state.source.post[data.id];
//  const extraPostLink = `/${post.acf.extra_post.slug}`;
  const p = "category/recent/"
  const extraPostLink = `/${p}`;
  const extraPostData = state.source.get(extraPostLink);

  React.useEffect(() => {
    actions.source.fetch(extraPostLink);
  }, []);

  return (
    <>{
    //console.log(extraPostData)
      /*
      <PostStuff />
      */
      {/*extraPostData.isReady && <ExtraPostStuff />*/}


    }

    </>
  );
};

export default connect(SomePost);
