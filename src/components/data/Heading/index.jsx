import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./styles";

function Heading(props) {
  const { children, level = 1, token } = props;

  const headings = [StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6];
  const Current = headings[level - 1];

  return <Current token={token}>{children}</Current>;
}

export { Heading };
