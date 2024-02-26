import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledContainer {
  isMobile: boolean;
}

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  padding: ${({ isMobile }) => (isMobile ? "16px" : "20px")};
  flex-direction: column;
  gap: "16px";
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  width: auto;
  box-sizing: border-box;
  align-items: flex-start;
`;

export const StyledHead = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
