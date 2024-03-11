import { inube } from "@inube/design-system";
import styled from "styled-components";

interface IStyledModal {
  smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  width: ${({ smallScreen }) => (smallScreen ? "100%" : "402px")};
  padding: ${({ smallScreen }) =>
    smallScreen ? inube.spacing.s200 : inube.spacing.s300};
  margin: ${inube.spacing.s200} ${inube.spacing.s300};
  gap: ${({ smallScreen }) =>
    smallScreen ? inube.spacing.s200 : inube.spacing.s250};
  border-radius: ${inube.spacing.s200};
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s150};
  padding: ${inube.spacing.s050};

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      theme.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
  }
`;

interface IStyledDivider {
  dashed?: boolean;
}

const StyledDivider = styled.hr<IStyledDivider>`
  margin: 0;
  width: 100%;
  height: 0px;
  border: none;
  border-top: 0.5px ${({ dashed }) => (dashed ? "dashed" : "solid")};
  border-top-color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;

export { StyledBody, StyledModal, StyledDivider };
