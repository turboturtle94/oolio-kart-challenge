import type { Item } from "../../types/item";
import cart from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

import { useState } from "react";

import {
  Container,
  ImageContainer,
  ItemImage,
  AddToCartButton,
  ButtonIcon,
  QuantityCounterButton,
  ItemDescription,
} from "./OrderItem.styles";

const OrderItem = (props: { item: Item }) => {
  const { item } = props;
  const [itemCount, setItemCount] = useState<number>(0);
  return (
    <Container>
      <ImageContainer active={itemCount > 0}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={item.image.tablet} />
          <source media="(min-width: 650px)" srcSet={item.image.tablet} />
          <ItemImage src={item.image.mobile}></ItemImage>
        </picture>
        {itemCount === 0 ? (
          <AddToCartButton
            onClick={() => {
              setItemCount((prevCount) => {
                return ++prevCount;
              });
            }}
          >
            <ButtonIcon src={cart}></ButtonIcon>
            <span>Add to cart</span>
          </AddToCartButton>
        ) : (
          <QuantityCounterButton>
            <ButtonIcon
              src={minus}
              onClick={() => {
                setItemCount((prevCount) => {
                  return --prevCount;
                });
              }}
            ></ButtonIcon>
            <span>{itemCount}</span>
            <ButtonIcon
              src={plus}
              onClick={() => {
                setItemCount((prevCount) => {
                  return ++prevCount;
                });
              }}
            ></ButtonIcon>
          </QuantityCounterButton>
        )}
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
