import styled from "styled-components";
import { colors } from "../../../styles/colors";
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
`;

const StyledIcon = styled.picture`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export { StyledAppMenuCard, StyledIcon };
