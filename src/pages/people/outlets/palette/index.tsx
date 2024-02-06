import { useState } from "react";
import { PaletteUI } from "./interface";
import { paletteTabsConfig } from "./config/paletteTabs.config";
import type { IPeopleColorProps } from "src/routes/people";

function Palette(props: IPeopleColorProps) {
  const { token, handleSubmit } = props;

  const [selectedTab, setSelectedTab] = useState(paletteTabsConfig.neutral.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <PaletteUI
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      paletteConfig={paletteTabsConfig}
      selectedTab={selectedTab}
      token={token}
    />
  );
}

export { Palette };
