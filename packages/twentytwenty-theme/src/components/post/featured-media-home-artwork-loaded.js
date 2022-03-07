import React from "react";
import { connect, styled } from "frontity";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";

const FeaturedMedia = ({ state, id, className }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Figure className={className}>
      <SectionContainer size="medium">
        <Image
          alt={media.title.rendered}
          src={media.source_url}
          srcSet={srcset}
        />
      </SectionContainer>
    </Figure>
  );
};

export default connect(FeaturedMedia);
/*
  @media (min-width: 700px) {
    margin-top: 6rem;
  }
  */
const Figure = styled.figure`
  margin-top: 5rem;
  position: relative;
`;

const Image = styled(Img)`
  margin: 0 auto;
  max-width: 100%;
  display: block;
  width: calc(50vw * 0.45);
  height: calc(50vw * 0.45 * 1.33);
  object-fit: cover;
  @media(orientation: portrait){
    width: calc(100vw * 0.65);
    height: calc(100vw * 0.65 * 1.33);
  }
`;
