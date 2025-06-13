import type { Order } from "../../types/order";
import type { Item } from "../../types/item";
import {
  CartEntryContainer,
  CartEntryDetail,
  ItemName,
  ItemQty,
  ItemPrice,
  CartTotalContainer,
  ConfirmOrderButton,
} from "./styles/OrderSummary.styles";

import {
  OrderConfirmationContainer,
  OrderConfirmationTitle,
  ItemPriceGroup,
  ItemTotalCost,
  ProductHeader,
  OrderConfirmationCard,
  OrderConfirmationThumbnail,
} from "./styles/OrderConfirmation.styles";

const OrderConfirmation = ({
  orderSummary,
  items,
}: {
  orderSummary: Order;
  items: Item[];
}) => {
  const getItemQuantity = (id: string): number => {
    return orderSummary?.items.find((i) => i.productId === id)?.quantity ?? 0;
  };

  return (
    <OrderConfirmationContainer>
      <OrderConfirmationTitle>
        <h2>Order Confirmed</h2>
        <span>We hope you enjoy your food</span>
      </OrderConfirmationTitle>
      <OrderConfirmationCard>
        {orderSummary.products.map((product, index) => (
          <CartEntryContainer key={index}>
            <ProductHeader>
              <OrderConfirmationThumbnail>
                <img
                  src={items.find((i) => i.id === product.id)?.image.thumbnail}
                ></img>
              </OrderConfirmationThumbnail>
              <CartEntryDetail>
                <ItemName>{product.name}</ItemName>
                <ItemPriceGroup>
                  <ItemQty>{1}x</ItemQty>
                  <ItemPrice>@{product.price}</ItemPrice>
                </ItemPriceGroup>
              </CartEntryDetail>
            </ProductHeader>
            <ItemTotalCost>
              ${product.price * getItemQuantity(product.id)}
            </ItemTotalCost>
          </CartEntryContainer>
        ))}
        <CartTotalContainer>
          <span
            style={{ fontSize: "0.75rem", color: "#b7adac", fontWeight: 400 }}
          >
            Order Total
          </span>
          <span style={{ fontSize: "2rem", fontWeight: 500 }}>
            ${orderSummary?.totalCost.toFixed(2) ?? "0.00"}
          </span>
        </CartTotalContainer>
      </OrderConfirmationCard>

      <ConfirmOrderButton>Start New Order</ConfirmOrderButton>
    </OrderConfirmationContainer>
  );
};

export default OrderConfirmation;
