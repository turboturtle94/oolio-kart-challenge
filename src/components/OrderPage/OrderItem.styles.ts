import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
  * {
    border-radius: inherit;
  }
`;

export const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  max-width: 250px;
  aspect-ratio: 1;
  border-radius: 8px;
  @media (max-width: 1024px) {
    max-width: 150px;
  }
  position: relative;
  border: ${({ active }) => (active ? "2px solid #c73b0d" : "none")};
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills while preserving aspect */
  display: block;
  border-radius: inherit;
`;

export const ItemDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  height: 3rem;
  font-weight: 600;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 10rem;
  border-radius: 1.5rem;
  background: #fdfdfc;
  border: 1px solid #b8a1a2;
  gap: 0.5rem;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 4rem;
    span {
      display: none;
    }
  }
`;

export const QuantityCounterButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  width: 10rem;
  border-radius: 1.5rem;
  background: #c73b0d;
  border: 0;
  gap: 0.5rem;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  color: white;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 5rem;
    justify-content: center;
    padding: 0;
  }
`;

export const ButtonIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
