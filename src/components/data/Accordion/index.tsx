import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { Icon, Text, useMediaQuery } from "@inube/design-system";
import { StyledContainer, StyledDivider, StyledHead } from "./styles";

export interface IAccordionProps {
  title: string;
  defaultOpen?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export interface IDividerProps {
  dashed?: boolean;
}

export function Divider(props: IDividerProps) {
  const { dashed } = props;

  return <StyledDivider dashed={dashed} />;
}

export const Accordion = (props: IAccordionProps) => {
  const { title, defaultOpen = true, children } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggleOpen = () => setIsOpen(!isOpen);

  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <StyledContainer isMobile={isMobile}>
      <StyledHead onClick={handleToggleOpen}>
        <Text type="label" size={isMobile ? "medium" : "large"}>
          {title}
        </Text>

        <Icon
          icon={isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          appearance="dark"
          spacing="compact"
          cursorHover={true}
          size="24px"
        />
      </StyledHead>

      {isOpen && (
        <>
          <Divider dashed />
          {children}
        </>
      )}
    </StyledContainer>
  );
};
