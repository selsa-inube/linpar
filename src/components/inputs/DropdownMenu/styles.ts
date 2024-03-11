import { inube } from "@inube/design-system";
import styled from "styled-components";

const StyledDropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  overflow: auto;
  max-height: 384px;
  padding: ${inube.spacing.s050} ${inube.spacing.s0};
  margin-top: ${inube.spacing.s100};
  border-radius: ${inube.spacing.s050};

  background: ${({ theme }) =>
    theme.color?.surface?.ligth?.clear || inube.color.surface.light.clear};

  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      theme.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  }
`;

export { StyledDropdownMenu };
