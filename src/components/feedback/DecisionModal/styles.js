import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledModal = styled.div`
  background-color: ${colors.ref.palette.neutral.n10};
  min-width: ${(props) => (props.smallScreen ? "300px" : "400px")};
  max-width: ${(props) => (props.smallScreen ? "328px" : "500px")};
  height: auto;
  border-radius: 8px;
  margin: 16px;
  & > div {
    padding: ${(props) => (props.smallScreen ? "24px" : "32px")};
  }
`;

export { StyledModal };
