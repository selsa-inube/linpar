import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledDomainContainer = styled.div`
  & > p {
    margin-bottom: ${inube.spacing.s300};
  }
`;

export { StyledDomainContainer };
