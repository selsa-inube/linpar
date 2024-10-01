import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  position: absolute;
  right: 50px;
  transform: translateY(-20%);
  background-color: #ffffff;
  padding: 10px 5px;
  height: auto;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${tokens.spacing.s050};
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.stroke.dark.regular || inube.palette.neutral.N900};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke.dark.regular || inube.palette.neutral.N30};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  cursor: pointer;
`;

const StyleContainerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledIconClosed = styled.div`
  position: absolute;
  height: auto;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

export { StyledAppCard, StyleContainerActions, StyledIconClosed };
