import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledContainer = styled.div`
  width: 100%;
  min-width: 312px;
  box-sizing: border-box;
  border-radius: 8px;
  padding: ${inube.spacing.s200};
  border: 1px solid ${inube.color.stroke.divider.regular};
`;

const StyledHead = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledContent = styled.div`
  width: 100%;
  margin-top: ${inube.spacing.s200};
  padding-top: ${inube.spacing.s200};
  border-top: 2px dashed ${inube.color.stroke.divider.regular};
`;

export { StyledContainer, StyledContent, StyledHead };
