import React from "react";
import { Global, css, connect } from "frontity";

import ChakraPetchBold from "./fonts/Chakra_Petch/ChakraPetch-Bold.woff2";
import ChakraPetchBoldItalic from "./fonts/Chakra_Petch/ChakraPetch-BoldItalic.ttf";
import ChakraPetchItalic from "./fonts/Chakra_Petch/ChakraPetch-Italic.ttf";
import ChakraPetchLight from "./fonts/Chakra_Petch/ChakraPetch-Light.woff2";
import ChakraPetchLightItalic from "./fonts/Chakra_Petch/ChakraPetch-LightItalic.ttf";
import ChakraPetchRegular from "./fonts/Chakra_Petch/ChakraPetch-Regular.woff2";
//import ChakraPetchSemiBold from "./fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf";

const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    case "us-ascii":
      fonts = [ChakraPetchLight,ChakraPetchRegular, ChakraPetchBold ];
      fontDisplay = "block";
      break;
    case "latin":
      fonts = [ChakraPetchLight,ChakraPetchRegular, ChakraPetchBold ];
      break;
    default:
      fonts = [ChakraPetchLight,ChakraPetchRegular, ChakraPetchBold ];
  }

  return (
    <Global
      styles={css`
        @font-face {
          font-display: swap;
          font-family: "Chakra Petch";
          font-style: normal
          font-weight: 300;
          src: url(${fonts[0]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-display: swap;
          font-family: "Chakra Petch";
          font-style: normal;
          font-weight: 400;
          src: url(${fonts[1]}) format("woff2");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-display: swap;
          font-family: "Chakra Petch";
          font-style: normal;
          font-weight: 700;
          src: url(${fonts[2]}) format("woff2");
          font-display: ${fontDisplay};
        }
      `}
    />
  );
};

export default connect(FontFace);
