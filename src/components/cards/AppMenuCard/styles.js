import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledAppMenuCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 191px;
  height: 135px;

  :hover {
    & svg {
      color: ${colors.sys.actions.primary};
    }
    & picture {
      background-color: ${colors.sys.actions.secondary};
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
