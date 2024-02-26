import styled from "styled-components";
import { inube } from "@inube/design-system";
import { IDividerProps } from ".";

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
