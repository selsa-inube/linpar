import { useState } from "react";
import { EditUserUI } from "./interface";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userEntriesDataMock } from "../../../../../mocks/apps/privileges/users.mock";
import { useParams } from "react-router-dom";

function EditUser() {
  const { user_id } = useParams();

  const [isSelected, setIsSelected] = useState(
    editUserTabsConfig.generalInformation.id
  );

  function getUserInformation() {
    const userID = parseInt(user_id);
    const user = userEntriesDataMock.find((user) => user.id === userID);
    const userCardData = {
      nombre: user?.username || "",
      identificación: user?.userID || "",
      codigo: user?.code || "",
      rol: user?.position || "",
    };
    return userCardData;
  }

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  return (
    <EditUserUI
      isSelected={isSelected}
      handleTabChange={handleTabChange}
      user={getUserInformation()}
    />
  );
}

export { EditUser };
