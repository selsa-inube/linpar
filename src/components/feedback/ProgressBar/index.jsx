import { StyledProgressBar } from "./styles";

function ProgressBar(props) {
  const {
    duration = 10000,
    colorToken,
    isPaused,
    size = 4,
    handleAnimationEnd,
  } = props;
  return (
    <StyledProgressBar
      duration={duration}
      colorToken={colorToken}
      isPaused={isPaused}
      size={size}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}

export { ProgressBar };
