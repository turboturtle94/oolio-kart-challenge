import {
  CartEntryContainer,
  CartEntryDetail,
  CartTotalContainer,
  ItemName,
  ItemPrice,
  ItemQty,
} from "./OrderSummary.styles";

import close from "../../assets/close.png";
import type { Order } from "../../types/order";

const Cart = ({ orderSummary }: { orderSummary: Order }) => {
  const getItemQuantity = (id: string): number => {
    return orderSummary?.items.find((i) => i.productId === id)?.quantity ?? 0;
  };

  return (
    <>
      {orderSummary.products.map((product) => (
        <CartEntryContainer key={product.id}>
          <CartEntryDetail>
            <ItemName>{product.name}</ItemName>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <ItemQty>{getItemQuantity(product.id)}x</ItemQty>
              <ItemPrice>
                @{product.price} ${product.price * getItemQuantity(product.id)}
              </ItemPrice>
            </div>
          </CartEntryDetail>
          <img
            src={close}
            alt="Remove"
            style={{ width: "1rem", height: "1rem" }}
          />
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
    </>
  );
};

export default Cart;
