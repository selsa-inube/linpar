import { useState } from "react";
import { EditUserUI } from "./interface";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userEntriesDataMock } from "@mocks/apps/privileges/users.mock";
import { useParams } from "react-router-dom";
import { branchesFormEditUser } from "@mocks/apps/privileges/branchesForm.mock";
import { eventsFormEditUser } from "@mocks/apps/privileges/eventsForm.mock";
import { payrollsFormEditUser } from "@mocks/apps/privileges/payrollsForm.mock";
import { projectsFormEditUser } from "@mocks/apps/privileges/projectsForm.mock";
import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/aidBudgetsForm.mock";

function EditUser() {
  const { user_id } = useParams();

  const [selectedTab, setSelectedTab] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const [editData, setEditData] = useState({
    generalInformation: { entries: {} },
    branches: { entries: branchesFormEditUser },
    projects: { entries: projectsFormEditUser },
    events: { entries: eventsFormEditUser },
    aidBudgetUnits: { entries: aidBudgetsFormEditUser },
    payrolls: { entries: payrollsFormEditUser },
  });

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  function getUserInformation() {
    const userID = parseInt(user_id);
    return userEntriesDataMock.find((user) => user.id === userID);
  }

  const handleSubmit = (values) => {
    const editKey = Object.keys(editUserTabsConfig).find(
      (key) => editUserTabsConfig[key].id === selectedTab
    );

    setEditData((prevEditData) => ({
      ...prevEditData,
      [editKey]: { entries: values },
    }));
  };

  const user = getUserInformation();

  return (
    <EditUserUI
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
      user={user}
      editData={editData}
      handleSubmit={handleSubmit}
    />
  );
}

export { EditUser };
