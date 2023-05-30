import { colors } from "@styles/colors";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border-style: solid;
  border-color: ${colors.ref.palette.neutral.n40};
  padding: 10px 20px 20px 20px;
  margin-bottom: 12px;
`;

const StyledBranchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 344px;
  overflow-y: scroll;
  margin-top: 32px;
`;

export { StyledFieldset, StyledBranchesContainer };
