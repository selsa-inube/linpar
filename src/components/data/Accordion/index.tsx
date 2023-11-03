import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Stack, Text, Icon, useMediaQuery } from "@inube/design-system";
import { StyledContainer, StyledContent, StyledHead } from "./styles";

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
}

function Accordion(props: IAccordionProps) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const screenMovil = useMediaQuery("(max-width: 744px)");

  return (
    <Stack direction="column" alignItems="center" justifyContent="space-start">
      <StyledContainer screenMovil={screenMovil}>
        <StyledHead onClick={() => setIsOpen(!isOpen)}>
          <Text type="title" size="medium">
            {title}
          </Text>

          {isOpen ? (
            <Icon icon={<MdKeyboardArrowUp />} appearance="dark" size="24px" />
          ) : (
            <Icon
              icon={<MdKeyboardArrowDown />}
              appearance="dark"
              size="24px"
            />
          )}
        </StyledHead>
        {isOpen && (
          <StyledContent screenMovil={screenMovil}>{children}</StyledContent>
        )}
      </StyledContainer>
    </Stack>
  );
}

export { Accordion };
export type { IAccordionProps };
