import { useState } from "react";
import { SectionMessageUI } from "./interface";
import { useMediaQuery } from "@inube/design-system";

function SectionMessage({ icon, title, description, appearance, duration }) {
  const [isPaused, setIsPaused] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleHideSectionMessage = () => setIsHidden(true);

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
      isHidden={isHidden}
      isPaused={isPaused}
      isMessageResponsive={isMessageResponsive}
    />
  );
}

export { SectionMessage };
