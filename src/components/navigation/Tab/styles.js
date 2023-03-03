import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledTab = styled.li`
  padding-top: 10px;
  cursor: pointer;

  padding-bottom: ${(props) => (props.isActive ? `4px` : `8px`)};

  border-bottom: ${(props) =>
    props.isActive && `4px solid ${colors.sys.actions.primary.stroke}`};

  color: ${(props) =>
    props.isActive ? colors.sys.text.primary : colors.sys.text.dark};
`;

export { StyledTab };
