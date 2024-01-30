import { useContext, useState } from "react";
import { SurfacesUI } from "./interface";
import { surfaceTabsConfig } from "./config/surfaceTabs.config";
import { surfaceFormsConfig } from "./config/surface.config";
import { TokenContext } from "@src/context/TokenContext";

function Surfaces() {
  const { token, handleSubmit } = useContext(TokenContext);

  const [selectedTab, setSelectedTab] = useState(surfaceTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <SurfacesUI
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      selectedTab={selectedTab}
      surfaceConfig={surfaceFormsConfig}
      token={token}
    />
  );
}

export { Surfaces };
