import React from "react";
import { Global, css, connect } from "frontity";

import IBMPlexSansThin from "./fonts/IBM_Plex_Sans/IBMPlexSans-Thin.woff2";
import IBMPlexSansThinItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-ThinItalic.woff2";

import IBMPlexSansExtraLight from "./fonts/IBM_Plex_Sans/IBMPlexSans-ExtraLight.woff2";
import IBMPlexSansExtraLightItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-ExtraLightItalic.woff2";

import IBMPlexSansLight from "./fonts/IBM_Plex_Sans/IBMPlexSans-Light.woff2";
import IBMPlexSansLightItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-LightItalic.woff2";

import IBMPlexSansRegular from "./fonts/IBM_Plex_Sans/IBMPlexSans-Regular.woff2";
import IBMPlexSansItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-Italic.woff2";

import IBMPlexSansMedium from "./fonts/IBM_Plex_Sans/IBMPlexSans-Medium.woff2";
import IBMPlexSansMediumItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-MediumItalic.woff2";

import IBMPlexSansSemiBold from "./fonts/IBM_Plex_Sans/IBMPlexSans-SemiBold.woff2";
import IBMPlexSansSemiBoldItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-SemiBoldItalic.woff2";

import IBMPlexSansBold from "./fonts/IBM_Plex_Sans/IBMPlexSans-Bold.woff2";
import IBMPlexSansBoldItalic from "./fonts/IBM_Plex_Sans/IBMPlexSans-BoldItalic.woff2";

import ArchivGroteskRegular from "https://www.blog.thingsthatmove.xyz/wp-content/uploads/2022/03/ArchivGroteskTrial-RegularTrial.woff2";



const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    case "us-ascii":
      fonts = [IBMPlexSansThin, IBMPlexSansThinItalic, IBMPlexSansExtraLight, IBMPlexSansExtraLightItalic, IBMPlexSansLight, IBMPlexSansLightItalic, IBMPlexSansRegular, IBMPlexSansItalic, IBMPlexSansMedium, IBMPlexSansMediumItalic, IBMPlexSansSemiBold, IBMPlexSansSemiBoldItalic, IBMPlexSansBold, IBMPlexSansBoldItalic, ArchivGroteskRegular];
      fontDisplay = "block";
      break;
    case "latin":
      fonts = [IBMPlexSansThin, IBMPlexSansThinItalic, IBMPlexSansExtraLight, IBMPlexSansExtraLightItalic, IBMPlexSansLight, IBMPlexSansLightItalic, IBMPlexSansRegular, IBMPlexSansItalic, IBMPlexSansMedium, IBMPlexSansMediumItalic, IBMPlexSansSemiBold, IBMPlexSansSemiBoldItalic, IBMPlexSansBold, IBMPlexSansBoldItalic, ArchivGroteskRegular];
      break;
    default:
      fonts = [IBMPlexSansThin, IBMPlexSansThinItalic, IBMPlexSansExtraLight, IBMPlexSansExtraLightItalic, IBMPlexSansLight, IBMPlexSansLightItalic, IBMPlexSansRegular, IBMPlexSansItalic, IBMPlexSansMedium, IBMPlexSansMediumItalic, IBMPlexSansSemiBold, IBMPlexSansSemiBoldItalic, IBMPlexSansBold, IBMPlexSansBoldItalic, ArchivGroteskRegular];
  }

  return (
    <Global
      styles={css`

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 100;
          src: url(${fonts[0]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 100;
          src: url(${fonts[1]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 200;
          src: url(${fonts[2]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 200;
          src: url(${fonts[3]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal
          font-weight: 300;
          src: url(${fonts[4]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 300;
          src: url(${fonts[5]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 400;
          src: url(${fonts[6]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 400;
          src: url(${fonts[7]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 500;
          src: url(${fonts[8]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 500;
          src: url(${fonts[9]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 600;
          src: url(${fonts[10]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 600;
          src: url(${fonts[11]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[12]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "IBM Plex Sans";
          font-style: italic;
          font-weight: 700;
          src: url(${fonts[13]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Archiv Grotesk";
          font-style: normal;
          font-weight: 300;
          src: url(${fonts[14]}) format("woff2");
          font-display: ${fontDisplay};
        }


      `}
    />
  );
};

export default connect(FontFace);
