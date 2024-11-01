import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";

const StyledAppMenuCard = styled(Link)`
  box-sizing: border-box;
  padding: 16px;
  width: 191px;
  height: 140px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke.dark.regular || inube.palette.neutral.N900};

  @media (max-width: 580px) {
    display: flex;
    width: 100%;
    height: 72px;
    padding: 16px 8px;
    & div:first-child {
      flex-direction: row;
      gap: 8px;
    }
    & p {
      text-align: left;
    }
  }
`;

export { StyledAppMenuCard };
