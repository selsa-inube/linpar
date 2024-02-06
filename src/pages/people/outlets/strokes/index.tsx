import { useState } from "react";
import { StrokesUI } from "./interface";

import { strokesTabsConfig } from "./config/strokesTabs.config";
import { strokesFormsConfig } from "./config/Strokes.config";

function Strokes() {
  const [selectedTab, setSelectedTab] = useState(strokesTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
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
