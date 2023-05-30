import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledContentDelete = styled.div`
  & svg {
    cursor: pointer;
    color: ${colors.ref.palette.neutral.n900};
  }

  & svg:hover {
    color: ${colors.sys.actions.remove.filled};
  }
`;

export { StyledContentDelete };
