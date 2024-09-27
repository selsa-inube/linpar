import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  padding: ${tokens.spacing.s300};
  height: 170px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${tokens.spacing.s050};
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke.dark.regular || inube.palette.neutral.N900};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke.dark.regular || inube.palette.neutral.N30};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
    box-shadow: none;
  }

  @media (max-width: 400px) {
    padding: ${tokens.spacing.s200};
    width: 100%;
    min-height: 100px;
    gap: ${tokens.spacing.s100};

    div {
      gap: ${tokens.spacing.s050};
    }
  }
`;

export { StyledAppCard };
