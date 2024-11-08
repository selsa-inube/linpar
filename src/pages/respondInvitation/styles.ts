import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const Styledlmage = styled.img`
  width: 157px;
  height: 52.3px;
  object-fit: cover;
`;

const StyledContainerHeader = styled.div`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
`;
const StyledContainerForm = styled.div`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
`;

export { Styledlmage, StyledContainerHeader, StyledContainerForm };
