import close from "../../assets/close.png";
import tree from "../../assets/tree.png";
import { useOrder } from "../../context/OrderContext";
import {
  OrderSummaryContainer,
  SummaryCard,
  SummaryHeader,
  CartEntryContainer,
  CartEntryDetail,
  CartInfoContainer,
  CartTotalContainer,
  ConfirmOrderButton,
} from "./OrderSummary.styles";

const OrderSummary = () => {
  const { totalItemsOrdered } = useOrder();

  return (
    <OrderSummaryContainer>
      <SummaryCard>
        <SummaryHeader>Your Cart</SummaryHeader>
        <CartEntryContainer>
          <CartEntryDetail>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#716A67",
                fontWeight: 600,
              }}
            >
              Classic Tiramisu
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "1rem",
                  color: "#bc7964",
                  fontWeight: 500,
                }}
              >
                1x
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#b7adac",
                  fontWeight: 400,
                }}
              >
                @5.50 5.50
              </span>
            </div>
          </CartEntryDetail>
          <img src={close} style={{ width: "1rem", height: "1rem" }}></img>
        </CartEntryContainer>
        <CartEntryContainer>
          <CartEntryDetail>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#716A67",
                fontWeight: 600,
              }}
            >
              Classic Tiramisu
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "1rem",
                  color: "#bc7964",
                  fontWeight: 500,
                }}
              >
                1x
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#b7adac",
                  fontWeight: 400,
                }}
              >
                @5.50 5.50
              </span>
            </div>
          </CartEntryDetail>
          <img src={close} style={{ width: "1rem", height: "1rem" }}></img>
        </CartEntryContainer>
        <CartEntryContainer>
          <CartEntryDetail>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#716A67",
                fontWeight: 600,
              }}
            >
              Classic Tiramisu
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "1rem",
                  color: "#bc7964",
                  fontWeight: 500,
                }}
              >
                1x
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#b7adac",
                  fontWeight: 400,
                }}
              >
                @5.50 5.50
              </span>
            </div>
          </CartEntryDetail>
          <img src={close} style={{ width: "1rem", height: "1rem" }}></img>
        </CartEntryContainer>
        <CartTotalContainer>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#b7adac",
              fontWeight: 400,
            }}
          >
            Order Total
          </span>
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 500,
            }}
          >
            $46.50
          </span>
        </CartTotalContainer>
        <CartInfoContainer>
          <img src={tree} style={{ width: "1rem", height: "1rem" }}></img>
          This is carbon neutral delivery
        </CartInfoContainer>
        <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
      </SummaryCard>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
