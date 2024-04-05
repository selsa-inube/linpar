import styled from "styled-components";
import { inube } from "@inube/design-system";
import { IDividerProps } from ".";

export const StyledContainer = styled.div`
  display: flex;
  padding: ${inube.spacing.s150} ${inube.spacing.s200};
  flex-direction: column;
  gap: ${inube.spacing.s200};
  border-radius: 8px;
  box-sizing: border-box;
  align-items: flex-start;
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.dark?.regular || inube.color.stroke.dark.regular};
`;

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const StyledDivider = styled.hr<IDividerProps>`
  margin: ${inube.spacing.s0};
  width: 100%;
  border: none;
  border-top: 0.5px ${({ dashed }) => (dashed ? "dashed" : "solid")};
  border-top-color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;
