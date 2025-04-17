import React, { useEffect } from "react";
import { connect } from "frontity";
import Loading from "./loading";

const Footer = ({ state, actions }) => {
  const extraPostLink = "/landings/footer/";
  const landingData = state.source.get(extraPostLink);

  useEffect(() => {
    console.log("📦 Fetching footer:", extraPostLink);
    actions.source.fetch(extraPostLink);
  }, []);

  return landingData.isReady ? (
    <footer>
      <p>Footer loaded from: {extraPostLink}</p>
    </footer>
  ) : (
    <Loading />
  );
};

export default connect(Footer);