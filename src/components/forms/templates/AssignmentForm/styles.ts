import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledForm = styled.form`
  width: 100%;
`;

const StyledEntriesContainer = styled.div`
  & > div {
    max-height: 344px;
    overflow-y: auto;
  }
`;

const StyledOptionsContainer = styled.div`
  height: ${inube.spacing.s300};
  text-align: right;
`;

export { StyledEntriesContainer, StyledForm, StyledOptionsContainer };
