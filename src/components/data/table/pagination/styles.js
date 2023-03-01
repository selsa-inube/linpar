import styled from "styled-components";
import { colors } from "../../../../styles/colors";

const StyledContentPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 52px;
  width: 100%;

  & button {
    cursor: pointer;
    background-color: ${colors.ref.palette.neutral.n0};
    border: none;
    height: 52px;
    padding: 0px 8px;
  }

  & button:nth-of-type(1),
  button:nth-of-type(4) {
    width: 49px;
  }

  & button:nth-of-type(1) {
    text-align: right;
  }

  & button:nth-of-type(4) {
    text-align: left;
  }

  & button:nth-of-type(2),
  button:nth-of-type(3) {
    width: 32px;
  }

  & svg {
    width: 16px;
    height: 16px;
    color: ${colors.ref.palette.neutral.n900};
  }
`;

const StyledContentText = styled.div`
  padding: 18px 16px;
`;

export { StyledContentPagination, StyledContentText };
