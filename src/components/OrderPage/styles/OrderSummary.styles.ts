import styled from "styled-components";

export const SummaryHeader = styled.h1`
  color: #bc7964;
  font-weight: 500;
  padding: 0.5rem;
  @media (max-height: 896px) and (max-width: 414px) {
    padding: 0;
    font-size: 1.5rem;
  }
`;

export const CartEntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #f3f3f3;
  align-items: center;
  padding: 0.5rem;
`;

export const CartEntries = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 15rem;
  overflow-y: auto;

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #a8a8a8 transparent;

  /* WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
  @media (max-width: 414px) {
    max-height: 6rem;
  }
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
  @media (max-height: 896px) and (max-width: 414px) {
    padding: 0;
  }
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
  @media (max-height: 896px) and (max-width: 414px) {
    display: none;
  }
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #c73b0d;
  color: white;
  border-radius: 1.5rem;
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }
  @media (max-height: 896px) and (max-width: 414px) {
    height: 2rem;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CouponContainer = styled.div`
  display: flex;
  height: 3em;
  width: 100%;
  justify: center;
  align-items: center;
  @media (max-height: 896px) and (max-width: 414px) {
    height: 1.5rem;
  }
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
  @media (max-height: 896px) and (max-width: 414px) {
    padding: 0.5rem;
    height: 1.5rem;
  }
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
  &:focus-visible {
    outline: none;
  }
  img {
    width: 2rem;
    margin-top: 8px;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const OrderSummaryContainer = styled.div`
  position: sticky;
  left: calc(100vw - 30% - 1rem);
  display: flex;
  padding: 1rem;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
    top: 0;
    left: 0;
    min-height: 30%;
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
  @media (max-width: 1024px) {
    height: 100%;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height:;
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