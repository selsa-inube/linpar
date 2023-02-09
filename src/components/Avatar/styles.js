import styled from "styled-components";

import { colors } from "../../styles/colors";

const StyledAvatar = styled.div`
  box-sizing: border-box;
  padding: 8px 16px;
  border-left: 1px solid ${colors.ref.palette.neutral.n50};
  cursor: pointer;
`;

const StyledAvatarText = styled.div`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const StyledAvatarIcon = styled.img`
  width: 32px;
  height: 100%;
`;

export { StyledAvatar, StyledAvatarText, StyledAvatarIcon };
