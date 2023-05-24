import { useState } from "react";
import { EditUserUI } from "./interface";
import { editUserTabsConfig } from "./config/editUserTabs.config";

function EditUser() {
  const [isSelected, setIsSelected] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  return (
    <EditUserUI isSelected={isSelected} handleTabChange={handleTabChange} />
  );
}

export { EditUser };
