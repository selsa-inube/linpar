import { useState } from "react";

import { PaletteUI } from "./interface";
import { paletteTabsConfig } from "./config/paletteTabs.config";

function Palette() {
  const [selectedTab, setSelectedTab] = useState(paletteTabsConfig.neutral.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <PaletteUI
      handleTabChange={handleTabChange}
      paletteConfig={paletteTabsConfig}
      selectedTab={selectedTab}
    />
  );
}

export { Palette };
