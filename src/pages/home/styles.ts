import { Link } from "react-router-dom";
import styled from "styled-components";
import { inube } from "@inubekit/foundations";

import { tokens } from "@design/tokens";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: ${tokens.spacing.s500};
  height: 100vh;
  overflow-y: auto;
`;

const StyledHeaderContainer = styled.div`
  & div > div {
    cursor: pointer;
  }
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  top: ${tokens.spacing.s600};
  right: 15px;
  z-index: 1;
  overflow: hidden;
  border-radius: ${tokens.spacing.s100};
  width: 312px;
  box-shadow: 0px 2px 3px 0px #091e4221;
  box-shadow: 0px 6px 10px 4px #091e4221;
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.palette.neutral.N0};
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledTitle = styled.div`
  padding: ${tokens.spacing.s400} ${tokens.spacing.s1600} ${tokens.spacing.s600};

  @media screen and (max-width: 805px) {
    padding: ${tokens.spacing.s400} ${tokens.spacing.s1000}
      ${tokens.spacing.s500};
  }
`;

const StyledContainerCards = styled.div`
  box-sizing: border-box;
  padding: ${tokens.spacing.s0} ${tokens.spacing.s1400} ${tokens.spacing.s400}
    170px;
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.s300};

  @media screen and (max-width: 805px) {
    justify-content: center;
    padding: ${tokens.spacing.s0} ${tokens.spacing.s1200} ${tokens.spacing.s400}
      ${tokens.spacing.s1000};
  }
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: ${tokens.spacing.s0} ${tokens.spacing.s1600} ${tokens.spacing.s0};
`;

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledMenuContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledContainerCards,
  StyledFooter,
};
