import { colors } from "@styles/colors";
import styled from "styled-components";

const StyledOption = styled.button`
  color: ${colors.sys.text.secondary};
  padding: 6px 13px;
  border: none;
  background-color: ${colors.ref.palette.neutral.n0};
  cursor: pointer;
  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledOption };
