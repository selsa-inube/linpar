import styled from "styled-components";
import { colors } from "@styles/colors";
import { Link } from "react-router-dom";

const StyledAppMenuCard = styled(Link)`
  box-sizing: border-box;
  padding: 16px;
  width: 191px;
  height: 140px;
  text-decoration: none;
  color: ${colors.ref.palette.neutral.n900};
  :hover {
    & svg {
      color: ${colors.sys.actions.primary.filled};
    }
    & picture {
      background-color: ${colors.sys.actions.secondary.filled};
    }
  }

  @media (max-width: 490px) {
    display: flex;
    padding: 16px 8px;
    width: 100%;
    height: 72px;
    & div:first-child {
      flex-direction: row;
      gap: 8px;
    }
    & p {
      text-align: left;
    }
  }
`;

const StyledIcon = styled.picture`
  background-color: transparent;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export { StyledAppMenuCard, StyledIcon };
