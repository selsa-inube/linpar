import { StyledParagraph } from "./styles";

function Text(props) {
  const { children, token = "bodyMedium", align = "left" } = props;

  return (
    <StyledParagraph token={token} align={align}>
      {children}
    </StyledParagraph>
  );
}

export { Text };
