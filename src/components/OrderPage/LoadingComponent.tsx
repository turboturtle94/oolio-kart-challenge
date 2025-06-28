import { SkeletonRect, SkeletonText } from "./styles/Skeleton.styles";

const LoadingComponent = () => {
  return (
    <>
      <div
        style={{
          padding: "2rem",
          height: "100vh",
          backgroundColor: "#f7f2ee",
        }}
      >
        <SkeletonText width="30%" height="40px" />
        <SkeletonRect height="70vh" />
      </div>
    </>
  );
};

export default LoadingComponent;
