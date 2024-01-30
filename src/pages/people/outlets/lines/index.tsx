import { useContext, useState } from "react";
import { LinesUI } from "./interface";
import { linesFormsConfig } from "./config/lines.config";
import { linesTabsConfig } from "./config/linesTabs.config";
import { TokenContext } from "@src/context/TokenContext";

function Lines() {
  const { token, handleSubmit } = useContext(TokenContext);
  const [selectedTab, setSelectedTab] = useState(linesTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <LinesUI
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      selectedTab={selectedTab}
      linesConfig={linesFormsConfig}
      token={token}
    />
  );
}

export { Lines };
