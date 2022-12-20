import { StyledStack } from "./styles";

function Stack(props) {
  const { children, direction, spacing, justify, align } = props;

  return (
    <StyledStack
      direction={direction}
      spacing={spacing}
      justify={justify}
      align={align}
    >
      {children}
    </StyledStack>
  );
}

export { Stack };
