import { useState } from "react";
import { SurfacesUI } from "./interface";
import { surfaceTabsConfig } from "./config/surfaceTabs.config";
import type { IPeopleColorProps } from "src/routes/people";
import { surfaceFormsConfig } from "./config/surface.config";

function Surfaces(props: IPeopleColorProps) {
  const { token, handleSubmit } = props;

  const [selectedTab, setSelectedTab] = useState(surfaceTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <SurfacesUI
      token={token}
      handleSubmit={handleSubmit}
      surfaceConfig={surfaceFormsConfig}
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
    />
  );
}

export { Surfaces };
