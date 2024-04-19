import styled from "styled-components";
import { inube } from "@inube/design-system";

export const StyledContainer = styled.div`
  display: flex;
  padding: ${inube.spacing.s150} ${inube.spacing.s200};
  flex-direction: column;
  gap: ${inube.spacing.s200};
  border-radius: 8px;
  box-sizing: border-box;
  align-items: stretch;
  width: 100%;
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
`;

export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
