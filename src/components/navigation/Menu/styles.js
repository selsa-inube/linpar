import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledMenu = styled.div`
  position: relative;
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  max-width: 200px;
  min-width: 135px;
  box-shadow: 0px 1px 2px ${colors.ref.palette.neutralAlpha.n60a},
    0px 2px 6px 2px ${colors.ref.palette.neutralAlpha.n40a};
  background-color: ${colors.ref.palette.neutral.n0};
  border-radius: 4px;
`;

export { StyledMenu, StyledMenuContainer };
