import styled from "styled-components";

import { inube } from "@inube/design-system";

const StyledWelcomeContainer = styled.div`
  background-color: ${inube.color.surface.dark.clear};
`;

const StyledOutletContainer = styled(StyledWelcomeContainer)`
  background-color: ${inube.color.surface.light.clear};
  padding: 32px 16px;
`;

const StyledImage = styled.img`
  max-width: 240px;

  @media screen and (max-width: 1000px) {
    max-width: 200px;
  }

  @media screen and (max-width: 600px) {
    max-width: 160px;
  }
`;

export { StyledWelcomeContainer, StyledOutletContainer, StyledImage };
