import React from "react";
import { Global, css, connect } from "frontity";


let IBMPlexSansThin = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap";

let IBMPlexSansExtraLight = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200&display=swap";

let IBMPlexSansLight = "https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdA.woff2";

let IBMPlexSansRegular = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap";

let IBMPlexSansMedium = "https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdA.woff2";

let IBMPlexSansSemiBold = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap";

let IBMPlexSansBold = "https://fonts.gstatic.com/s/ibmplexsans/v8/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdA.woff2";

import ArchivGroteskRegular from "./fonts/ArchivGroteskTrial-RegularTrial.woff2";

//import ArchivGroteskRegular from "https://www.blog.thingsthatmove.xyz/wp-content/uploads/2022/03/ArchivGroteskTrial-RegularTrial.woff2";



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
      fonts = [IBMPlexSansThin, IBMPlexSansExtraLight, IBMPlexSansLight, IBMPlexSansRegular, IBMPlexSansMedium, IBMPlexSansSemiBold, IBMPlexSansBold, ArchivGroteskRegular];
  }

  return (
    <Global
      styles={css`

        @font-face {
          font-family: "Archiv Grotesk";
          font-style: normal;
          font-weight: 300;
          src: url(${fonts[7]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[5]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 300;
          src: url(${fonts[3]}) format("woff2");
          font-display: ${fontDisplay};
        }


      `}
    />
  );
};

export default connect(FontFace);
