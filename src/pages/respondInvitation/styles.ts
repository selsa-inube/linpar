import { inube } from "@inube/design-system";
import styled from "styled-components";

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
  gap: 32px;
`;

export { StyledForm, StyledWelcomeContainer, Styledlmage };
