import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledModal = styled.div`
  background-color: ${colors.ref.palette.neutral.n10};
  width: 487px;
  height: auto;
  border-radius: 8px;

  & > div {
    padding: 32px;
  }
`;

export { StyledModal };
