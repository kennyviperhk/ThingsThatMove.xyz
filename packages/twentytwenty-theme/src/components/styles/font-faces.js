import { Global, css, connect } from "frontity";
import ArchivGroteskRegular from "../../fonts/ArchivGroteskTrial-RegularTrial.woff2";

const FontFace = ({ state }) => {
  const fontDisplay = state.theme.fontSets === "us-ascii" ? "block" : "swap";

  return (
    <Global
      styles={css`
        /* Preload the custom font */
        @font-face {
          font-family: "Archiv Grotesk";
          font-style: normal;
          font-weight: 300;
          src: url(${ArchivGroteskRegular}) format("woff2");
          font-display: ${fontDisplay};
        }

        /* Load IBM Plex Sans from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        /* Fallback font styles */
        body {
          font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

        .archiv-grotesk {
          font-family: "Archiv Grotesk", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }
      `}
    />
  );
};

export default connect(FontFace);
