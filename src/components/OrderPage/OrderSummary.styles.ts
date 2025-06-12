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
  gap: 0.5rem;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const CartInfoContainer = styled.div`
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
  min-height: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: white;

  @media (max-width: 1024px) {
    height: 30%;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;
