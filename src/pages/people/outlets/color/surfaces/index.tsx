import { useState } from "react";
import { SurfacesUI } from "./interface";
import { surfaceTabsConfig } from "./config/surfaceTabs.config";
import { surfaceFormsConfig } from "./config/surface.config";
import { SurfaceAppearance } from "./types";

function Surfaces() {
  const [selectedTab, setSelectedTab] = useState<SurfaceAppearance>(
    surfaceTabsConfig.primary.id
  );

  const handleTabChange = (tabId: SurfaceAppearance) => {
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
