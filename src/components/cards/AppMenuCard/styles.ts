import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inube/design-system";

interface IStyledAppMenuCardProps {
  theme?: typeof inube;
}

const StyledAppMenuCard = styled(Link)`
  box-sizing: border-box;
  padding: 16px;
  width: 191px;
  height: 140px;
  text-decoration: none;
  color: ${({ theme }: IStyledAppMenuCardProps) =>
    theme?.color?.stroke.dark.regular || inube.color.stroke.dark.regular};
  :hover {
    & svg {
      color: ${({ theme }: IStyledAppMenuCardProps) =>
        theme?.color?.stroke.primary.regular ||
        inube.color.stroke.primary.regular};
    }
    & picture {
      background-color: ${({ theme }: IStyledAppMenuCardProps) =>
        theme?.color?.surface.gray.regular || inube.color.surface.gray.regular};
    }
  }

  @media (max-width: 490px) {
    display: flex;
    padding: 16px 8px;
    width: 100%;
    height: 72px;
    & div:first-child {
      flex-direction: row;
      gap: 8px;
    }
    & p {
      text-align: left;
    }
  }
`;

export { StyledAppMenuCard };
