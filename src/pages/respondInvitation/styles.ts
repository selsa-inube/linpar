import { colors } from "@styles/colors";
import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRespondInvitation {
  theme?: typeof inube;
}

const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
`;

const StyledWelcomeContainer = styled.div`
  background-color: ${({ theme }: IStyledRespondInvitation) =>
    theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  padding: ${inube.spacing.s800};
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s450};
`;

const Styledlmage = styled.img`
  width: 157px;
  height: 52.3px;
  object-fit: cover;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s400};
`;

export { StyledForm, StyledPageContainer, StyledWelcomeContainer, Styledlmage };
