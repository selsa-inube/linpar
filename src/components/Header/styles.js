import styled from "styled-components";
import { colors } from "../../styles/colors";

const StyledHeader = styled.header`
  max-height: 56px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid ${colors.ref.palette.lightNeutral.ln400};

  @media (min-width: 851px) {
    grid-template-columns: 1fr auto;
    .menu-icon {
      display: none;
    }
  }
`;

const StyledLogo = styled.img`
  max-width: 100px;
  margin-left: 20px;
`;

export { StyledHeader, StyledLogo };
