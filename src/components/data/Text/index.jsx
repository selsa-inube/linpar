import { StyledParagraph } from "./styles";

function Text(props) {
  const { children, token = "bodyLarge" } = props;

  return <StyledParagraph token={token}>{children}</StyledParagraph>;
}

export { Text };
