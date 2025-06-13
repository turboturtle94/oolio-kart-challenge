import styled from "styled-components";

export const SummaryHeader = styled.h1`
  color: #bc7964;
  font-weight: 500;
  padding: 0.5rem;
`;

export const CartEntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #f3f3f3;
  align-items: center;
  padding: 0.5rem;
`;

export const CartEntryDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #fbf7f4;
  font-size: 0.75rem;
  font-weight: 600;
  gap: 0.5rem;
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #c73b0d;
  color: white;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:focus-visible {
    outline: none;
  }
`;

export const CouponContainer = styled.div`
  display: flex;
  height: 3em;
  width: 100%;
  justify: center;
  align-items: center;
`;

export const CouponInput = styled.input`
  height: 3rem;
  width: calc(100% - 3rem);
  background-color: white;
  border: none;
  font-size: 1rem;
  border: 1px solid #c73b0d;
  &:focus-visible {
    outline: none;
  }
  padding: 1rem;
`;

export const CouponButton = styled.button`
  display: flex;
  width: 3rem;
  height: 100%;
  padding: 2px;
  justify-content: center;
  align-items: center;
  background-color: #c73b0d;
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
  &:focus-visible {
    outline: none;
  }
  img {
    width: 2rem;
    margin-top: 8px;
  }
`;

export const OrderSummaryContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0.25rem;
  }
`;

export const SummaryCard = styled.div`
  width: 100%;
  min-height: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: white;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ItemName = styled.div`
  font-size: 0.8rem;
  color: #716a67;
  font-weight: 600;
`;

export const ItemQty = styled.span`
  font-size: 1rem;
  color: #bc7964;
  font-weight: 600;
`;
export const ItemPrice = styled.span`
  font-size: 0.8rem;
  color: #b7adac;
  font-weight: 600;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const EmptyCartImage = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const EmptyCartText = styled.span`
  color: #988a87;
  font-weight: 500;
`;

export const ItemNameGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;