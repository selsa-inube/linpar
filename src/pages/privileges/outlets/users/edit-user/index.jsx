import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/aidBudgetsForm.mock";
import { branchesFormEditUser } from "@mocks/apps/privileges/branchesForm.mock";
import { eventsFormEditUser } from "@mocks/apps/privileges/eventsForm.mock";
import { payrollsFormEditUser } from "@mocks/apps/privileges/payrollsForm.mock";
import { projectsFormEditUser } from "@mocks/apps/privileges/projectsForm.mock";
import { userEntriesDataMock } from "@mocks/apps/privileges/users.mock";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { EditUserUI } from "./interface";

function EditUser() {
  const { user_id } = useParams();

  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: null,
  });

  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const [editData, setEditData] = useState({
    generalInformation: { entries: getUserInformation() },
    branches: { entries: branchesFormEditUser },
    projects: { entries: projectsFormEditUser },
    events: { entries: eventsFormEditUser },
    aidBudgetUnits: { entries: aidBudgetsFormEditUser },
    payrolls: { entries: payrollsFormEditUser },
  });

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
    setCurrentFormHasChanges(false);
  };

  const handleTabChange = (tabId) => {
    let modalUpdate = controlModal;
    let selectTab = tabId;

    if (currentFormHasChanges) {
      modalUpdate = { show: true, continueTab: tabId };
      selectTab = selectedTab;
    }
    setControlModal(modalUpdate);
    setSelectedTab(selectTab);
  };

  const handleCloseModal = () => {
    setControlModal((prevControlModal) => ({
      ...prevControlModal,
      show: false,
    }));
  };

  const handleDataChange = (editData) => {
    setCurrentFormHasChanges(editData);
  };

  const HandleContinueTab = () => {
    setCurrentFormHasChanges(false);
    setSelectedTab(controlModal.continueTab);
  };

  const validateDataReset = (resetData) => {
    setCurrentFormHasChanges(resetData && false);
  };

  return (
    <EditUserUI
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
      editData={editData}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      HandleContinueTab={HandleContinueTab}
      validateDataReset={validateDataReset}
    />
  );
}

export { EditUser };
