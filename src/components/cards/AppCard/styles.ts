import styled from "styled-components";

import { colors } from "@styles/colors";

import { Link } from "react-router-dom";
import { inube } from "@inube/design-system";

interface IStyledAppCardProps {
  theme?: typeof inube;
}

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  padding: ${({ theme }: IStyledAppCardProps) =>
    theme?.spacing?.s300 || inube.spacing.s300};
  min-height: 180px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }: IStyledAppCardProps) =>
    theme?.spacing?.s050 || inube.spacing.s050};
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
    padding: ${({ theme }: IStyledAppCardProps) =>
      theme?.spacing?.s200 || inube.spacing.s200};
    width: 100%;
    min-height: 104px;
    gap: ${({ theme }: IStyledAppCardProps) =>
      theme?.spacing?.s100 || inube.spacing.s100};

    div {
      gap: ${({ theme }: IStyledAppCardProps) =>
        theme?.spacing?.s050 || inube.spacing.s050};
    }
  }
`;

export { StyledAppCard };
