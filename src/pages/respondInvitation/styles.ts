import { colors } from "@styles/colors";
import styled from "styled-components";

const StyledRespondInvitationContainer = styled.div`
  display: grid;
  grid-template-columns: Ifr 2fr;
  min-height: 100vh;
`;

const Styledwelcomecontainer = styled.div`
  background-color: ${colors.ref.palette.neutral.n3e};
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Styledlmage = styled.img`
  width: 157px;
  object-fit: cover;
`;

export {
  StyledRespondInvitationContainer,
  Styledlmage,
  Styledwelcomecontainer,
};
