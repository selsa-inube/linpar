import { StyledProgressBar } from "./styles";

function ProgressBar(props) {
  const { duration = 10000, colorToken, isPaused, size = 4 } = props;
  return (
    <StyledProgressBar
      duration={duration}
      colorToken={colorToken}
      isPaused={isPaused}
      size={size}
    />
  );
}

export { ProgressBar };
