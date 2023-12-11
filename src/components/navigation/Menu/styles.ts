import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledMenuProps {
  theme?: typeof inube;
}

const StyledMenu = styled.div`
  position: absolute;
  right: 2%;
  top: 18rem;
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  max-width: 200px;
  min-width: 160px;
  box-shadow: ${inube.spacing.s0} 1px ${inube.spacing.s025}
      ${({ theme }: IStyledMenuProps) =>
        theme?.color?.stroke?.light?.disabled ||
        inube.color.stroke.light.disabled},
    ${inube.spacing.s0} ${inube.spacing.s025} ${inube.spacing.s075}
      ${inube.spacing.s025}
      ${({ theme }: IStyledMenuProps) =>
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular};
  background-color: ${({ theme }: IStyledMenuProps) =>
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.clear};
  border-radius: ${inube.spacing.s050};
  background-color: #fff;
  padding: ${inube.spacing.s050} ${inube.spacing.s025};
`;

export { StyledMenu, StyledMenuContainer };
