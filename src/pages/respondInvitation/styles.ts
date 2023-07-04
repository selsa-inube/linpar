import { colors } from "@styles/colors";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
`;

const StyledWelcomeContainer = styled.div`
  background-color: ${colors.ref.palette.neutral.n30};
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 36px;
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

export { StyledForm, StyledPageContainer, StyledWelcomeContainer, Styledlmage };
