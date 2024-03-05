import { TextsUI } from "./interface";
import { textsTabsConfig } from "./config/textsTabs.config";
import { textFormsConfig } from "./config/text.config";
import { useState } from "react";
import { TextAppearance } from "./types";

function Texts() {
  const [selectedTab, setSelectedTab] = useState(textsTabsConfig.primary.id);

  const handleTabChange = (tabId: TextAppearance) => {
    setSelectedTab(tabId);
  };

  return (
    <TextsUI
      handleTabChange={handleTabChange}
      selectedTab={selectedTab}
      textConfig={textFormsConfig}
    />
  );
}

export { Texts };
