import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledItem = styled.div`
  cursor: pointer;
  height: 104px;
  padding: ${inube.spacing.s150};
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.regular || inube.color.surface.light.regular};
  border-radius: ${inube.spacing.s100};
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;

export { StyledItem };
