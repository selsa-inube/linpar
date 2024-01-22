import { useState } from "react";
import { LinesUI } from "./interface";

import type { IPeopleColorProps } from "src/routes/people";
import { linesFormsConfig } from "./config/lines.config";
import { linesTabsConfig } from "./config/linesTabs.config";

function Lines(props: IPeopleColorProps) {
  const { token, handleSubmit } = props;
  const [selectedTab, setSelectedTab] = useState(linesTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <LinesUI
      token={token}
      handleSubmit={handleSubmit}
      linesConfig={linesFormsConfig}
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
    />
  );
}

export { Lines };
