import React from "react";

export const BackgroundVideo = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
          opacity: "0.7",
        }}
      >
        <source src="/Matrix.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
