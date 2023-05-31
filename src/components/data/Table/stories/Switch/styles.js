import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledContentSwitch = styled.div`
  & svg {
    cursor: pointer;
    color: ${colors.ref.palette.neutral.n200};
  }

  & svg:hover {
    color: ${colors.sys.actions.secondary.filled};
  }
`;

export { StyledContentSwitch };
