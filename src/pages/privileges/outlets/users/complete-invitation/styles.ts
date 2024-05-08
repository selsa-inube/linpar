import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledAssistedContainer = styled.div`
  border-radius: ${({ theme }) => theme?.spacing?.s100 || inube.spacing.s100};
  padding: ${({ theme }) => theme?.spacing?.s200 || inube.spacing.s200};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;

export { StyledAssistedContainer };
