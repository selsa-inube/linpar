import styled from "styled-components";

import { inube } from "@inube/design-system";

interface IStyledImage {
  width?: string;
}

const StyledWelcomeContainer = styled.div`
  background-color: ${inube.color.surface.dark.clear};
`;

const StyledOutletContainer = styled(StyledWelcomeContainer)`
  background-color: ${inube.color.surface.light.clear};
`;

const StyledImage = styled.img<IStyledImage>`
  width: ${({ width }) => width};
  max-width: 1200px;
`;

export { StyledWelcomeContainer, StyledOutletContainer, StyledImage };
