import styled from "styled-components";
import { inube } from "@inube/design-system";
import { IDividerProps } from ".";

interface IStyledContainer {
  isMobile: boolean;
}

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  padding: ${({ isMobile }) => (isMobile ? "16px" : "20px")};
  flex-direction: column;
  gap: "16px";
  border-radius: 8px;
  width: auto;
  min-height: 160px;
  box-sizing: border-box;
  align-items: flex-start;
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
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

export const StyledDivider = styled.hr<IDividerProps>`
  margin: 0;
  width: 100%;
  height: 0px;
  border: none;
  border-top: 0.5px ${({ dashed }) => (dashed ? "dashed" : "solid")};
  border-top-color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;
