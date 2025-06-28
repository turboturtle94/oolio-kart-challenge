import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const SkeletonBase = styled.div`
  background-color: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f5f5f5 40px,
    #e0e0e0 80px
  );
  background-size: 500px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
`;

export const SkeletonRect = styled(SkeletonBase)<{
  height?: string;
  radius?: string;
}>`
  width: 100%;
  height: ${({ height }) => height || "100px"};
  border-radius: ${({ radius }) => radius || "8px"};
`;

export const SkeletonText = styled(SkeletonBase)<{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1rem"};
  margin-bottom: 1rem;
  border-radius: 4px;
`;
