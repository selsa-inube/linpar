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
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) =>
      theme?.card?.shadow?.color?.regular || inube.palette.neutral.N70};

  cursor: pointer;

  &:hover {
    background-color: ${inube.palette.neutral.N30};
    box-shadow: none;
  }

  @media (max-width: 400px) {
    padding: ${tokens.spacing.s200};
    width: 100%;
    height: 120px;
    gap: ${tokens.spacing.s100};

    div {
      gap: ${tokens.spacing.s050};
    }
  }
`;

export { StyledAppCard };
