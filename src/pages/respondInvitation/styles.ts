import styled from "styled-components";
import { inube } from "@inube/design-system";

const Styledlmage = styled.img`
  width: 157px;
  height: 52.3px;
  object-fit: cover;
`;

const StyledContainerHeader = styled.div`
  background-color: ${({ theme }) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
`;
const StyledContainerForm = styled.div`
  background-color: ${({ theme }) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

export { Styledlmage, StyledContainerHeader, StyledContainerForm };
