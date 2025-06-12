import type { Item } from "../../types/item";
import cart from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

import { useEffect, useState } from "react";

import {
  Container,
  ImageContainer,
  AddToCartButton,
  ButtonIcon,
  QuantityCounterButton,
  ItemDescription,
  IconButton,
} from "./OrderItem.styles";
import { useOrder } from "../../context/OrderContext";
import ItemImageDisplay from "./ItemImage";

const OrderItem = (props: { item: Item }) => {
  const { item } = props;
  const { totalItemsOrdered, settotalItemsOrdered } = useOrder();
  const [currentItemCount, setCurrentItemCount] = useState<number>(0);

  useEffect(() => {
    const itemCount = totalItemsOrdered.get(item.id);
    setCurrentItemCount(itemCount ? itemCount : 0);
  }, [totalItemsOrdered]);

  const updateTotalItems = (op: string) => {
    const newtotalItemsOrdered = new Map(totalItemsOrdered);
    if (newtotalItemsOrdered.get(item.id)) {
      const count = newtotalItemsOrdered.get(item.id) as number;
      const newItemCount = op === "+" ? count + 1 : count - 1;
      newtotalItemsOrdered.set(item.id, newItemCount);
    } else {
      newtotalItemsOrdered.set(item.id, 1);
    }
    settotalItemsOrdered(newtotalItemsOrdered);
  };

  return (
    <Container>
      <ImageContainer active={currentItemCount > 0}>
        <ItemImageDisplay src={item.image}></ItemImageDisplay>
        {currentItemCount === 0 ? (
          <AddToCartButton
            onClick={() => {
              updateTotalItems("+");
            }}
          >
            <ButtonIcon src={cart}></ButtonIcon>
            <span>Add to cart</span>
          </AddToCartButton>
        ) : (
          <QuantityCounterButton>
            <IconButton
              onClick={() => {
                updateTotalItems("-");
              }}
            >
              <ButtonIcon src={minus}></ButtonIcon>
            </IconButton>
            <span>{currentItemCount}</span>
            <IconButton
              onClick={() => {
                updateTotalItems("+");
              }}
            >
              <ButtonIcon src={plus}></ButtonIcon>
            </IconButton>
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
