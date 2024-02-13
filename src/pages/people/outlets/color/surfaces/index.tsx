import { useState } from "react";
import { SurfacesUI } from "./interface";
import { surfaceTabsConfig } from "./config/surfaceTabs.config";
import { surfaceFormsConfig } from "./config/surface.config";

function Surfaces() {
  const [selectedTab, setSelectedTab] = useState(surfaceTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <SurfacesUI
      handleTabChange={handleTabChange}
      selectedTab={selectedTab}
      surfaceConfig={surfaceFormsConfig}
    />
  );
}

export { Surfaces };
