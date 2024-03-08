import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledAppCardProps {
  theme?: typeof inube;
}

const StyledAssistedContainer = styled.div`
  border-radius: ${({ theme }: IStyledAppCardProps) =>
    theme?.spacing?.s100 || inube.spacing.s100};
  padding: ${({ theme }: IStyledAppCardProps) =>
    theme?.spacing?.s200 || inube.spacing.s200};
  background-color: ${({ theme }: IStyledAppCardProps) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
`;

export { StyledAssistedContainer };
