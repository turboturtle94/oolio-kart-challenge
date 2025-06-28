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
  width: 250px;
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
  &:focus-visible {
    outline: none;
    border: 1px solid #c73b0d;
  }
  @media (max-width: 1024px) {
    width: 4rem;
    span {
      display: none;
    }
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: brightness(0.9);
      border: 1px solid #c73b0d;
    }
  }
`;

export const QuantityCounterButton = styled.span`
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

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 5rem;
    justify-content: center;
    padding: 0;
  }
`;
interface IconButtonProps {
  $borderColor?: string;
}

export const IconButton = styled.button<IconButtonProps>`
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  &:focus-visible,
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      outline: none;
      border: 2px solid ${({ $borderColor }) => $borderColor || "white"};
    }
  }
`;

export const ButtonIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
