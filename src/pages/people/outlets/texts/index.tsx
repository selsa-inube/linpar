import { TextsUI } from "./interface";
import { textsTabsConfig } from "./config/textsTabs.config";
import { textFormsConfig } from "./config/text.config";
import { useState } from "react";

function Texts() {
  const [selectedTab, setSelectedTab] = useState(textsTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
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
