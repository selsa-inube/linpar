import { StyledParagraph } from "./styles";

function Text(props) {
  const {
    children,
    typoToken = "bodyMedium",
    align = "left",
    colorToken = "primary",
  } = props;

  return (
    <StyledParagraph
      typoToken={typoToken}
      align={align}
      colorToken={colorToken}
    >
      {children}
    </StyledParagraph>
  );
}

export { Text };
