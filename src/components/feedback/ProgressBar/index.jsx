import { StyledProgressBar } from "./styles";
import { useState } from "react";

function ProgressBar({ duration = 10, colorToken, isPaused }) {
  return (
    <StyledProgressBar
      duration={duration}
      colorToken={colorToken}
      isPaused={isPaused}
    ></StyledProgressBar>
  );
}

export { ProgressBar };
