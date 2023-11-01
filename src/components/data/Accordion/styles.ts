import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledComponents {
  screenMovil: boolean;
}

const StyledContainer = styled.div<IStyledComponents>`
  width: 100%;
  min-width: 312px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${inube.color.stroke.divider.regular};
  padding: ${({ screenMovil }) =>
    !screenMovil
      ? `${inube.spacing.s200} ${inube.spacing.s250}`
      : `${inube.spacing.s150} ${inube.spacing.s200}`};
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

const StyledContent = styled.div<IStyledComponents>`
  width: 100%;
  border-top: 2px dashed ${inube.color.stroke.divider.regular};
  margin-top: ${({ screenMovil }) =>
    !screenMovil ? inube.spacing.s200 : inube.spacing.s150};
  padding-top: ${({ screenMovil }) =>
    !screenMovil ? inube.spacing.s200 : inube.spacing.s150};
`;

export { StyledContainer, StyledContent, StyledHead };
