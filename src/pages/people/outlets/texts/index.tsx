import { useContext, useState } from "react";
import { TextsUI } from "./interface";
import { textsTabsConfig } from "./config/textsTabs.config";
import { textFormsConfig } from "./config/text.config";
import { TokenContext } from "@src/context/TokenContext";

function Texts() {
  const { token, handleSubmit } = useContext(TokenContext);

  const [selectedTab, setSelectedTab] = useState(textsTabsConfig.primary.id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <TextsUI
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      selectedTab={selectedTab}
      textConfig={textFormsConfig}
      token={token}
    />
  );
}

export { Texts };
