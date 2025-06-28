import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #fcf9f5;
  min-height: 100vh;
  justify-content: space-between;

  @media (min-width: 1438px) {
    padding: 4rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const ItemsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  row-gap: 1rem;
  max-height: calc(100% - 2rem);
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

  @media (min-width: 3840px) {
    grid-template-columns: repeat(8, 1fr);
    padding: 0.25rem;
  }

  @media (max-width: 2560px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 0.25rem;
  }
  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0.25rem;
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0.25rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemsDisplay = styled.div`
  display: flex;
  position: sticky;
  left: 1rem;
  flex-direction: column;
  max-height: calc(100vh - 8rem);
  overflow-y: hidden;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 100%;
    top: calc(30% + 3rem);
    left: 0;
    max-height: calc(100vh - 40%);
    overflow-y: hidden;
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

