import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  max-width: 200px;
  min-width: 160px;
  box-shadow: 0px 1px 2px ${colors.ref.palette.neutralAlpha.n50A};
  background-color: ${colors.ref.palette.neutral.n0};
  border-radius: 4px;
`;

export { StyledMenu };
