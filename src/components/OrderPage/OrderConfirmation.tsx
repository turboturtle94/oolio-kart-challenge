import type { Order } from "../../types/order";
import type { Item } from "../../types/item";
import {
  CartEntryContainer,
  CartEntryDetail,
  OrderConfirmationContainer,
  OrderConfirmationTitle,
  ItemName,
  ItemQty,
  ItemPrice,
  OrderConfirmationThumbnail,
  CartTotalContainer,
  ConfirmOrderButton,
} from "./OrderSummary.styles";

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
      <div
        style={{
          backgroundColor: "#FCF8F5",
          padding: "1rem",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {orderSummary.products.map((product, index) => (
          <CartEntryContainer key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <OrderConfirmationThumbnail>
                <img
                  src={items.find((i) => i.id === product.id)?.image.thumbnail}
                ></img>
              </OrderConfirmationThumbnail>
              <CartEntryDetail>
                <ItemName
                  style={{
                    fontSize: "0.75rem",
                    color: "#695F5D",
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </ItemName>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <ItemQty>{1}x</ItemQty>
                  <ItemPrice
                    style={{
                      fontSize: "0.75rem",
                      color: "#C9C0BD",
                      fontWeight: 600,
                    }}
                  >
                    @{product.price}
                  </ItemPrice>
                </div>
              </CartEntryDetail>
            </div>
            <div style={{ color: "#5D5351" }}>
              ${product.price * getItemQuantity(product.id)}
            </div>
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
      </div>

      <ConfirmOrderButton>Start New Order</ConfirmOrderButton>
    </OrderConfirmationContainer>
  );
};

export default OrderConfirmation;
