import { StyledParagraph } from "./styles";

function Text(props) {
  const {
    children,
    typoToken = "bodyMedium",
    align = "left",
    color = "primary",
  } = props;

  return (
    <StyledParagraph typoToken={typoToken} align={align} colorToken={color}>
      {children}
    </StyledParagraph>
  );
}

export { Text };
