import styled from "styled-components";

import { Link } from "react-router-dom";
import { inube } from "@inube/design-system";

interface IStyledAppCardProps {
  theme?: typeof inube;
}

const StyledAppCard = styled(Link)`
  min-height: 180px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({ theme }: IStyledAppCardProps) =>
    theme?.spacing?.s050 || inube.spacing.s050};
  color: ${({ theme }: IStyledAppCardProps) =>
    theme?.color?.stroke?.dark?.regular || inube.color.stroke.dark.regular};
  border: 1px solid
    ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};

  &:hover {
    background-color: ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
    box-shadow: none;
  }

  @media (max-width: 640px) {
    min-height: 104px;
  }
`;

export { StyledAppCard };
