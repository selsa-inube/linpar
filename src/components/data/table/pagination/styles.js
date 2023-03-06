import styled from "styled-components";
import { colors } from "../../../../styles/colors";

const StyledContentPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 52px;
  width: 100%;
`;

const StyledContentButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 25px 0px;
  margin-left: 16px;
  gap: 8px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${colors.ref.palette.neutral.n0};
  border: none;
  border-radius: 5px;
  padding: 4px;
  width: 24px;
  height: 24px;

  &:hover {
    background-color: ${colors.sys.actions.disabled.filled};
  }

  & svg {
    width: 16px;
    height: 16px;
    color: ${colors.sys.text.dark};
  }

  & svg:hover {
    color: ${colors.sys.text.information};
  }
`;

const StyledContentText = styled.div`
  padding: 16px 0px;
`;

export {
  StyledContentPagination,
  StyledContentText,
  StyledButton,
  StyledContentButtons,
};
