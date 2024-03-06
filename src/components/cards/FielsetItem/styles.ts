import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledFielsetItem = styled.div`
  cursor: pointer;
  height: 104px;
  padding: ${({ theme }) => theme?.spacing?.s150 || inube.spacing.s150};
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.regular || inube.color.surface.light.regular};
  border-radius: 8px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
  overflow: hidden;
`;

export { StyledFielsetItem };
