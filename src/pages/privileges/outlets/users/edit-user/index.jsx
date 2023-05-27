import { useState } from "react";
import { EditUserUI } from "./interface";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userEntriesDataMock } from "../../../../../mocks/apps/privileges/users.mock";
import { useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();

  const [isSelected, setIsSelected] = useState(
    editUserTabsConfig.generalInformation.id
  );

  function getUserInformation() {
    const foundUser = userEntriesDataMock.find((user) => user.id == id);
    const userCardData = {
      nombre: foundUser?.username || "",
      identificación: foundUser?.userID || "",
      codigo: foundUser?.code || "",
      rol: foundUser?.position || "",
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
