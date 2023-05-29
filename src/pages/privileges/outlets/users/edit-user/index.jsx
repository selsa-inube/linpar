import { useState } from "react";
import { EditUserUI } from "./interface";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userEntriesDataMock } from "../../../../../mocks/apps/privileges/users.mock";
import { useParams } from "react-router-dom";

function EditUser() {
  const { user_id } = useParams();

  const [selectedTab, setSelectedTab] = useState(
    editUserTabsConfig.generalInformation.id
  );

  function getUserInformation() {
    const userID = parseInt(user_id);
    return userEntriesDataMock.find((user) => user.id === userID);
  }

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  if (!getUserInformation()) {
    return <div>User not found</div>;
  }

  return (
    <EditUserUI
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
      user={getUserInformation()}
    />
  );
}

export { EditUser };
