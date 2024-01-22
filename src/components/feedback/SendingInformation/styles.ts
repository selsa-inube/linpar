import { inube } from "@inube/design-system";
import styled from "styled-components";
import { ISectionMessageProps } from ".";

type Themed = typeof inube;

interface IStyledSectionMessageProps extends ISectionMessageProps {
  theme: Themed;
}

const StyledSectionMessage = styled.div`
  background-color: ${({ theme, appearance }: IStyledSectionMessageProps) => {
    return (
      theme?.color?.surface?.[appearance!]?.clear ||
      inube.color.surface[appearance!].clear
    );
  }};
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  overflow-wrap: anywhere;
`;

export { StyledSectionMessage };
