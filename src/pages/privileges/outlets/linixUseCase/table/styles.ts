import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledContainerActions = styled.div`
  > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  & :hover {
    color: ${inube.color.stroke.gray.hover};
  }
`;

export { StyledContainerActions };
