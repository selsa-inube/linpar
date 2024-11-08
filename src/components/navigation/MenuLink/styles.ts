import { inube } from "@inubekit/foundations";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  & > div {
    width: 170px;
  }
  & > div,
  svg {
    color: #091e42;
  }
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  display: inline-block;
  padding: "6px 12px";
  border: none;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  }
`;

export { StyledLink };
