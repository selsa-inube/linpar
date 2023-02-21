import { StyledParagraph } from "./styles";

function Text(props) {
  const {
    children,
    typoToken = "bodyMedium",
    align = "left",
    colorToken = "dark",
    as,
  } = props;

  return (
    <StyledParagraph
      typoToken={typoToken}
      align={align}
      colorToken={colorToken}
      as={as}
    >
      {children}
    </StyledParagraph>
  );
}

export { Text };
