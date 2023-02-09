import styled from "styled-components";

import { colors } from "../../../styles/colors";

const StyledAppCard = styled.li`
  box-sizing: border-box;
  padding: 24px;
  min-height: 180px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid ${colors.ref.palette.neutral.n30};
  box-shadow: 3px 3px 5px 1px ${colors.ref.palette.neutral.n30};
  cursor: pointer;

  &:hover {
    color: ${colors.sys.actions.primary};
    background-color: ${colors.sys.actions.secondary};
    box-shadow: none;
  }
`;

const StyledIcon = styled.i`
  svg {
    width: 24px;
    height: 24px;
  }
`;

export { StyledAppCard, StyledIcon };
