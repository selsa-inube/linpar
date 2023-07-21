import { Text } from "@inube/design-system";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  StyledContainer,
  StyledContent,
  StyledHead,
  StyledIcon,
} from "./styles";

interface AccordionProps {
  title: string;
  isFullWidth?: boolean;
  children: React.ReactNode;
}

function Accordion(props: AccordionProps) {
  const { title, children, isFullWidth } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => setIsOpen(!isOpen);

  return (
    <StyledContainer isOpen={isOpen} isFullWidth={isFullWidth}>
      <StyledHead>
        <Text typo="titleMedium">{title}</Text>

        <StyledIcon>
          {isOpen ? (
            <MdKeyboardArrowUp size={24} onClick={handleToggleOpen} />
          ) : (
            <MdKeyboardArrowDown size={24} onClick={handleToggleOpen} />
          )}
        </StyledIcon>
      </StyledHead>
      {isOpen && <StyledContent>{children}</StyledContent>}
    </StyledContainer>
  );
}

export { Accordion };
export type { AccordionProps };
