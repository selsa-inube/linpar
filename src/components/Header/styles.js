import styled from "styled-components";

import { colors } from "../../styles/colors";

const StyledHeader = styled.header`
  max-height: 56px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0px 0px 0px 16px;
  border-bottom: 1px solid ${colors.ref.palette.lightNeutral.ln400};
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

export { StyledHeader, StyledLogo };
