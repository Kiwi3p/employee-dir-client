import React from "react";
import { useLottie } from "lottie-react";
import CoHabAnimation from "./data.json";

function Animation() {
  const options = {
    animationData: CoHabAnimation,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <div className="lottie-container">{View}</div>
    </div>
  );
}

export default Animation;
