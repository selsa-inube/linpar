import { StyledStack } from "./styles";

function Stack(props) {
  const { children, direction, spacing } = props;

  return (
    <StyledStack direction={direction} spacing={spacing}>
      {children}
    </StyledStack>
  );
}

export { Stack };
