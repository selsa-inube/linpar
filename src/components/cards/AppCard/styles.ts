import styled from "styled-components";

import { Link } from "react-router-dom";
import { inube } from "@inube/design-system";

interface IStyledAppCardProps {
  theme?: typeof inube;
}

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  padding: 24px;
  min-height: 180px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }: IStyledAppCardProps) =>
    theme?.color?.stroke?.dark?.regular || inube.color.stroke.dark.regular};
  border: 1px solid
    ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  cursor: pointer;

  &:hover {
    color: ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.primary?.regular ||
      inube.color.surface.primary.regular};
    background-color: ${({ theme }: IStyledAppCardProps) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
    box-shadow: none;
  }

  @media (max-width: 590px) {
    padding: 16px;
    width: 100%;
    min-height: 104px;
    gap: 8px;

    div {
      gap: 4px;
    }
  }
`;

export { StyledAppCard };
