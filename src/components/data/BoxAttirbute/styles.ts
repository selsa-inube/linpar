import styled from "styled-components";
import { inube } from "@inube/design-system";

export const StyledBoxAttribute = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 6px 16px;
  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;
