import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledPageUsers = styled.div`
  padding: ${inube.spacing.s400} ${inube.spacing.s800};

  @media (max-width: 565px) {
    padding: ${inube.spacing.s200} ${inube.spacing.s200}
      calc(${inube.spacing.s250}*5) ${inube.spacing.s200};
  }
`;

export { StyledPageUsers };
