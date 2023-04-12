import { StyledProgressBar } from "./styles";

function ProgressBar({ duration = 10, colorToken, isPaused, size = 4 }) {
  return (
    <StyledProgressBar
      duration={duration}
      colorToken={colorToken}
      isPaused={isPaused}
      size={size}
    ></StyledProgressBar>
  );
}

export { ProgressBar };
