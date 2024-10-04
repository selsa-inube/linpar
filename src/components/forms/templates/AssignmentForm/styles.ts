import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledForm = styled.form`
  width: 100%;
`;

const StyledEntriesContainer = styled.div`
  & > div {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media (max-width: 480px) {
    & > div {
      width: 270px;
    }
    & > div > div > div > label:nth-child(2) {
      width: 200px;
    }
  }
`;

const StyledOptionsContainer = styled.div`
  position: relative;
  height: ${inube.spacing.s300};
  text-align: right;
`;

export { StyledEntriesContainer, StyledForm, StyledOptionsContainer };
