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
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
  border-radius: 15px;
  border: 1px solid
    ${({ theme }) => theme?.palette?.neutral?.N90 || inube.palette.neutral.N90};
  margin: 50px auto;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 800px;
  opacity: 1;
`;

const StyledContainerBlanket = styled.div`
  & > div {
    z-index: 0;
  }
`;

export {
  Styledlmage,
  StyledContainerHeader,
  StyledContainerForm,
  StyledContainerBlanket,
  Content,
};
