import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledEntriesContainer {
  readOnly?: boolean;
}

const StyledForm = styled.form`
  width: 100%;
`;

const StyledEntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s200};
  max-height: 344px;
  overflow-y: auto;
  margin-top: ${(readOnly: IStyledEntriesContainer) =>
    readOnly ? inube.spacing.s0 : inube.spacing.s400};
`;

const StyledOptionsContainer = styled.div`
  height: ${inube.spacing.s300};
  text-align: right;
`;

export { StyledEntriesContainer, StyledForm, StyledOptionsContainer };
