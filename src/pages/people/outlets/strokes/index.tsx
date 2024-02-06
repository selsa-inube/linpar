import { useState } from "react";
import { StrokesUI } from "./interface";

import type { IPeopleColorProps } from "src/routes/people";

import { strokesTabsConfig } from "./config/strokesTabs.config";
import { strokesFormsConfig } from "./config/Strokes.config";

function Strokes(props: IPeopleColorProps) {
  const { token, handleSubmit } = props;
  const [selectedTab, setSelectedTab] = useState(strokesTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <StrokesUI
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      selectedTab={selectedTab}
      strokesConfig={strokesFormsConfig}
      token={token}
    />
  );
}

export { Strokes };
