import { useState } from "react";
import { TextsUI } from "./interface";
import { textsTabsConfig } from "./config/textsTabs.config";
import type { IPeopleColorProps } from "src/routes/people";
import { textFormsConfig } from "./config/text.config";

function Texts(props: IPeopleColorProps) {
  const { token, handleSubmit } = props;

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
