import { inube } from "@inube/design-system";
import styled from "styled-components";
import { TextAppearance } from "@src/pages/people/outlets/color/texts/types";
import { ButtonType } from "./types";
import { StrokeAppearance } from "@src/pages/people/outlets/color/strokes/types";

interface IStyledSectionMessageProps {
  $icon: JSX.Element;
  $title: string;
  $description: string;
  $appearance: TextAppearance | StrokeAppearance;
  $duration: number;
  $closeSectionMessage: () => void;
  $buttonType?: ButtonType;
}

const StyledSectionMessage = styled.div<IStyledSectionMessageProps>`
  background-color: ${({ theme, $appearance }) => {
    return (
      theme?.color?.surface?.[$appearance!]?.clear ||
      inube.color.surface[$appearance!].clear
    );
  }};
  width: 100%;
  min-width: max-content;
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  overflow-wrap: anywhere;
`;

export { StyledSectionMessage };
