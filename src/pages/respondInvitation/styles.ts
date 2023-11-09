import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRespondInvitation {
  theme?: typeof inube;
}

const StyledPageContainer = styled.div`
  & div {
    min-height: 100vh;
  }
`;

const StyledWelcomeContainer = styled.div`
  & div {
    background-color: ${({ theme }: IStyledRespondInvitation) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  }
`;

const Styledlmage = styled.img`
  width: 157px;
  height: 52.3px;
  object-fit: cover;
`;

export { StyledPageContainer, StyledWelcomeContainer, Styledlmage };
