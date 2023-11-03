import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledWelcomeContainer = styled.div`
  background-color: ${inube.color.surface.dark.clear};
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

export { StyledForm, StyledWelcomeContainer, Styledlmage };
