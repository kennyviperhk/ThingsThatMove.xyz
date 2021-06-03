import React from "react";
import { Global, css, connect } from "frontity";


let IBMPlexSansThin = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap";

let IBMPlexSansExtraLight = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&display=swap";

let IBMPlexSansLight = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap";

let IBMPlexSansRegular = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap";

let IBMPlexSansMedium = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap";

let IBMPlexSansSemiBold = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap";

let IBMPlexSansBold = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap";

import ArchivGroteskRegular from "../../fonts/ArchivGroteskTrial-RegularTrial.woff2";



const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    case "us-ascii":
      fonts = [IBMPlexSansThin, IBMPlexSansExtraLight, IBMPlexSansLight, IBMPlexSansRegular, IBMPlexSansMedium, IBMPlexSansSemiBold, IBMPlexSansBold, ArchivGroteskRegular];
      fontDisplay = "block";
      break;
    case "latin":
      fonts = [IBMPlexSansThin, IBMPlexSansExtraLight, IBMPlexSansLight, IBMPlexSansRegular, IBMPlexSansMedium, IBMPlexSansSemiBold, IBMPlexSansBold, ArchivGroteskRegular];
      break;
    default:
      fonts = [IBMPlexSansThin, IBMPlexSansExtraLight,, IBMPlexSansLight, IBMPlexSansRegular, IBMPlexSansMedium, IBMPlexSansSemiBold, IBMPlexSansBold, ArchivGroteskRegular];
  }

  return (
    <Global
      styles={css`

        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap');

        @font-face {
          font-family: "Archiv Grotesk";
          font-style: normal;
          font-weight: 300;
          src: url(${fonts[8]}) format("woff2");
          font-display: ${fontDisplay};
        }


      `}
    />
  );
};

export default connect(FontFace);
