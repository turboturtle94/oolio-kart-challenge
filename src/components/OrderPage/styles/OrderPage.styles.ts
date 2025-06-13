import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4rem;
  background: #fcf9f5;
  min-height: 100vh;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0.25rem;
  }
`;

export const ItemsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  row-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0.25rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ItemsHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
  font-weight: 400;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

