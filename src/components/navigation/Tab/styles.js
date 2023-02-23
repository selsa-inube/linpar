import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledTab = styled.li`
  list-style-type: none;
  margin-right: 24px;
  padding-bottom: 4px;
  cursor: pointer;

  border-bottom: ${(props) =>
    props.isActive ? `4px solid ${colors.sys.actions.primary}` : `none`};

  color: ${(props) =>
    props.isActive ? colors.sys.text.primary : colors.sys.text.dark};

  &:first-child {
    margin-left: 16px;
  }
`;

export { StyledTab };
