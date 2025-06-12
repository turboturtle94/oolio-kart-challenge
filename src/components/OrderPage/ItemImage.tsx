import { ItemImage } from "./OrderItem.styles";

import { useState } from "react";

const ItemImageDisplay = ({
  src,
}: {
  src: { mobile: string; desktop: string; tablet: string; thumbnail: string };
}) => {
  const [loaded, setLoaded] = useState(false);
  return loaded ? (
    <picture
      onLoad={() => {
        setLoaded(true);
      }}
    >
      <source media="(min-width: 1024px)" srcSet={src.tablet} />
      <source media="(min-width: 650px)" srcSet={src.tablet} />
      <ItemImage src={src.mobile}></ItemImage>
    </picture>
  ) : (
    <></>
  );
};

export default ItemImageDisplay;
