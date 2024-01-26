import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const StyledNavLinkContainer = styled.div`
  width: auto;
  margin: 0px ${inube.spacing.s200};
  width: calc(216px + 2 * ${inube.spacing.s200});
  border: 1px solid ${inube.colors.s300};
  & div {
    gap: ${inube.spacing.s300};
  }
  & figure {
    height: 29px;
  }
`;

export { StyledMessageContainer, StyledNavLinkContainer };
