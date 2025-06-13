import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const DialogBox = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;

  @media (min-width: 768px) {
    width: 80%;
    max-height: 80vh;
  }

  @media (min-width: 1024px) {
    width: 60%;
    max-width: 600px;
    max-height: 100vh;
  }
`;

export const Body = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ItemPriceGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ItemTotalCost = styled.div`
  color: #5d5351;
`;

export const OrderConfirmationCard = styled.div`
  background-color: #fcf8f5;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  max-height: 90vh;
`;

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  gap: 1rem;
`;

export const OrderConfirmationTitle = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 500;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #a59b99;
  }
`;

export const OrderConfirmationThumbnail = styled.div`
  max-width: 3rem;
  max-height: 3rem;
  aspect-ratio: 1;
  img {
    width: 3rem;
    height: 3rem;
  }
`;
