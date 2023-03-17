import styled from "styled-components";

import { colors } from "../../../styles/colors";

import { Link } from "react-router-dom";

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  padding: 24px;
  min-height: 180px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  text-decoration: none;
  color: ${colors.ref.palette.neutral.n900};
  border: 1px solid ${colors.ref.palette.neutral.n30};
  box-shadow: 3px 3px 5px 1px ${colors.ref.palette.neutral.n30};
  cursor: pointer;

  &:hover {
    color: ${colors.sys.actions.primary.filled};
    background-color: ${colors.sys.actions.secondary.filled};
    box-shadow: none;
  }

  @media (max-width: 600px) {
    padding: 16px;
    width: 100%;
    min-height: 104px;
    gap: 8px;

    div {
      gap: 4px;
    }
  }
`;

const StyledIcon = styled.i`
  svg {
    width: 24px;
    height: 24px;
  }
`;

export { StyledAppCard, StyledIcon };
