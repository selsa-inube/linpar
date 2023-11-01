import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${inube.spacing.s400} ${inube.spacing.s800};

  @media (max-width: 490px) {
    padding: ${inube.spacing.s200};
  }
`;

export { StyledAppMenu };
