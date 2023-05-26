import { useState } from "react";
import { EditUserUI } from "./interface";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userEntriesDataMock } from "../../../../../mocks/apps/privileges/users.mock";
import { useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const foundEntry = userEntriesDataMock.find((user) => user.id == id);
  const subjectCardData = {
    Nombre: foundEntry?.username || "",
    Identificación: foundEntry?.userID || "",
    Codigo: foundEntry?.code || "",
    rol: foundEntry?.position || "",
  };

  const [isSelected, setIsSelected] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  return (
    <EditUserUI
      isSelected={isSelected}
      handleTabChange={handleTabChange}
      subjectCardData={subjectCardData}
    />
  );
}

export { EditUser };
