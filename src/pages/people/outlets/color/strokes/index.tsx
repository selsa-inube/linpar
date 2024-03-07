import { useState } from "react";
import { StrokesUI } from "./interface";

import { strokesTabsConfig } from "./config/strokesTabs.config";
import { strokesFormsConfig } from "./config/Strokes.config";
import { StrokeAppearance } from "./types";

function Strokes() {
  const [selectedTab, setSelectedTab] = useState<StrokeAppearance>(
    strokesTabsConfig.primary.id
  );

  const handleTabChange = (tabId: StrokeAppearance) => {
    setSelectedTab(tabId);
  };

  return (
    <StrokesUI
      handleTabChange={handleTabChange}
      selectedTab={selectedTab}
      strokesConfig={strokesFormsConfig}
    />
  );
}

export { Strokes };
