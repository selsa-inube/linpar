import styled from "styled-components";
import { inube } from "@inube/design-system";

export const StyledBoxAttribute = styled.div`
  display: flex;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: ${inube.spacing.s075} ${inube.spacing.s200};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;
