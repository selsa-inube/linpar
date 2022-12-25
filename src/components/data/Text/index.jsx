import { StyledParagraph } from "./styles";

function Text(props) {
  const { children, typoToken = "bodyMedium", align = "left" } = props;

  return (
    <StyledParagraph typoToken={typoToken} align={align} colorToken="primary">
      {children}
    </StyledParagraph>
  );
}

export { Text };
