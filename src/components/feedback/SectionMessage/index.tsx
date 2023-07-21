import { useState } from "react";
import { SectionMessageUI } from "./interface";
import { useMediaQuery } from "@inube/design-system";
import { EApparence } from "@src/types/colors.types";

interface SectionMessageProps {
  icon: JSX.Element | string;
  title: string;
  description: string;
  appearance: EApparence;
  duration: number;
  closeSectionMessage: () => void;
}

function SectionMessage(props: SectionMessageProps) {
  const {
    icon,
    title,
    description,
    appearance,
    duration,
    closeSectionMessage,
  } = props;
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const isMessageResponsive = useMediaQuery("(max-width: 565px)");

  return (
    <SectionMessageUI
      icon={icon}
      title={title}
      description={description}
      appearance={appearance}
      duration={duration}
      closeSectionMessage={closeSectionMessage}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      isPaused={isPaused}
      isMessageResponsive={isMessageResponsive}
    />
  );
}

export { SectionMessage };
export type { SectionMessageProps };
