import { colors } from "@src/styles/colors";
import styled from "styled-components";

interface IStyledContainer {
  isOpen: boolean;
  isFullWidth?: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  padding: ${(props) => (props.isOpen ? "24px" : "16px")};
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid var(--neutral-n-40, ${colors.ref.palette.neutral.n40});
  min-width: ${(props) => (props.isFullWidth ? "100%" : "48.9%")};
  box-sizing: border-box;
  align-items: flex-start;
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledContent = styled.div`
  border-top: 1px solid var(--neutral-n-40, ${colors.ref.palette.neutral.n40});
  padding-top: 16px;
  width: 100%;
`;

const StyledIcon = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export { StyledContainer, StyledHead, StyledContent, StyledIcon };
