import styled from "styled-components";
import { colors } from "../../../../../../../styles/colors";

const StyledIconDelete = styled.div`
  & svg:hover {
    color: ${colors.sys.actions.remove.filled};
    cursor: pointer;
  }
`;

export { StyledIconDelete };
