import { useState } from "react";
import { LinesUI } from "./interface";
import { linesFormsConfig } from "./config/lines.config";
import { linesTabsConfig } from "./config/linesTabs.config";

function Lines() {
  const [selectedTab, setSelectedTab] = useState(linesTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <LinesUI
      handleTabChange={handleTabChange}
      selectedTab={selectedTab}
      linesConfig={linesFormsConfig}
    />
  );
}

export { Lines };
