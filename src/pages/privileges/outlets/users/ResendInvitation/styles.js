import styled from "styled-components";
import { colors } from "../../../../../styles/colors";

const StyledIconResend = styled.div`
  & svg {
    cursor: pointer;
  }

  & svg:hover {
    color: ${colors.sys.actions.primary.filled};
  }
`;

export { StyledIconResend };
