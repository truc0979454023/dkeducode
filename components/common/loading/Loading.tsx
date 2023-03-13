import React from "react";
import SVGLoading from "./SVGLoading";

type Props = {
  size: number;
};

const Loading = ({ size }: Props) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-[100]">
      <div
        className="loader loader--style2"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <SVGLoading size={size} />
      </div>
    </div>
  );
};

export default Loading;
