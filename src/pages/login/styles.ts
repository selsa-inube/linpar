import styled from "styled-components";

import { inube } from "@inube/design-system";

interface IStyledImage {
  maxWidth: string;
}

const StyledWelcomeContainer = styled.div`
  background-color: ${inube.color.surface.dark.clear};
`;

const StyledOutletContainer = styled(StyledWelcomeContainer)`
  background-color: ${inube.color.surface.light.clear};
`;

const StyledImage = styled.img<IStyledImage>`
  max-width: ${({ maxWidth }) => maxWidth};
`;

export { StyledWelcomeContainer, StyledOutletContainer, StyledImage };
