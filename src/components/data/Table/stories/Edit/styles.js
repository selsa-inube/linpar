import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledContentEdit = styled.div`
  & svg {
    cursor: pointer;
    color: ${colors.ref.palette.neutral.n900};
  }

  & svg:hover {
    color: ${colors.sys.actions.primary.filled};
  }
`;

export { StyledContentEdit };
