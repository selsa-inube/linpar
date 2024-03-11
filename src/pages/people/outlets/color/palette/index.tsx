import { useState } from "react";

import { PaletteUI } from "./interface";
import { paletteTabsConfig } from "./config/paletteTabs.config";
import { PaletteAppearance } from "./types";

function Palette() {
  const [selectedTab, setSelectedTab] = useState<PaletteAppearance>(
    paletteTabsConfig.neutral.id
  );

  const handleTabChange = (tabId: PaletteAppearance) => {
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
