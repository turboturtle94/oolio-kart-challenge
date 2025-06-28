import { useState } from "react";
import { ItemImage } from "./styles/OrderItem.styles";
import { SkeletonRect } from "./styles/Skeleton.styles";

const ItemImageDisplay = ({
  src,
}: {
  src: { mobile: string; desktop: string; tablet: string; thumbnail: string };
}) => {
  const [loaded, setLoaded] = useState(false);

  const srcSet = `
    ${src.tablet} 650w,
    ${src.desktop} 1024w
  `;

  const sizes = `
    (min-width: 1024px) 33vw,
    (min-width: 650px) 50vw,
    100vw
  `;

  return (
    <>
      {!loaded && <SkeletonRect height="100%" radius="8px" />}
      <ItemImage
        src={src.mobile}
        srcSet={srcSet}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
        }}
      />
    </>
  );
};

export default ItemImageDisplay;
