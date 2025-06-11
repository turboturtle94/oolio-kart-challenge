import type { Item } from "../../types/item";
import styled from "styled-components";
import cart from "../../assets/cart.png";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  max-width: 250px;
  aspect-ratio: 1;
  border-radius: 4px;
  @media (max-width: 1024px) {
    max-width: 150px;
  }
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills while preserving aspect */
  display: block;
`;

const ItemDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  height: 3rem;
  font-weight: 600;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 10rem;
  border-radius: 1.5rem;
  background: #fdfdfc;
  border: 1px solid #b8a1a2;
  gap: 0.5rem;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  @media (max-width: 1024px) {
    width: 4rem;
    span {
      display: none;
    }
  }
`;

const ButtonIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const OrderItem = (props: { item: Item }) => {
  const { item } = props;
  return (
    <Container>
      <ImageContainer>
        <picture>
          <source media="(min-width: 1024px)" srcSet={item.image.tablet} />
          <source media="(min-width: 650px)" srcSet={item.image.tablet} />
          <ItemImage src={item.image.mobile}></ItemImage>
        </picture>
        <AddToCartButton>
          <ButtonIcon src={cart}></ButtonIcon>
          <span>Add to cart</span>
        </AddToCartButton>
      </ImageContainer>

      <ItemDescription>
        <span style={{ fontSize: 11, width: "100%", color: "#A49995" }}>
          {item.category}
        </span>
        <span style={{ fontSize: 16, width: "100%", color: "#6F6461" }}>
          {item.name}
        </span>
        <span style={{ fontSize: 13, width: "100%", color: "#BC7964" }}>
          {item.price}
        </span>
      </ItemDescription>
    </Container>
  );
};

export default OrderItem;
