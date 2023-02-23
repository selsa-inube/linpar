import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledTabsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
`;

const StyledLine = styled.hr`
  border-top: 2px solid ${colors.ref.palette.neutral.n40};
  margin: 0;
`;

export { StyledTabsContainer, StyledLine };
