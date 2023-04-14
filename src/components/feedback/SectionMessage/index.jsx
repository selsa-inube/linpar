import { useState } from "react";
import { SectionMessageUI } from "./interface";
import { useMediaQuery } from "@inube/design-system";

function SectionMessage(props) {
  const {
    icon,
    title,
    description,
    appearance,
    duration,
    handleHideSectionMessage,
  } = props;
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const isMessageResponsive = useMediaQuery("(max-width: 750px)");

  return (
    <SectionMessageUI
      icon={icon}
      title={title}
      description={description}
      appearance={appearance}
      duration={duration}
      handleHideSectionMessage={handleHideSectionMessage}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      isPaused={isPaused}
      isMessageResponsive={isMessageResponsive}
    />
  );
}

export { SectionMessage };
