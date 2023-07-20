import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";
import { branchesFormEditUser } from "@mocks/apps/privileges/users/branchesForm.mock";
import { eventsFormEditUser } from "@mocks/apps/privileges/users/eventsForm.mock";
import { payrollsFormEditUser } from "@mocks/apps/privileges/users/payrollsForm.mock";
import { projectsFormEditUser } from "@mocks/apps/privileges/users/projectsForm.mock";
import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { EditUserUI } from "./interface";
import {
  IFormsInvitation,
  IAssignmentFormEntry,
  IGeneralInformationEntry,
} from "../types/forms.types";

function EditUser() {
  const { user_id } = useParams<{ user_id: string }>();

  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });

  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const [editData, setEditData] = useState<IFormsInvitation>({
    generalInformation: { entries: getUserInformation() },
    branches: { entries: branchesFormEditUser },
    projects: { entries: projectsFormEditUser },
    events: { entries: eventsFormEditUser },
    aidBudgetUnits: { entries: aidBudgetsFormEditUser },
    payrolls: { entries: payrollsFormEditUser },
  });

  function getUserInformation() {
    return userEntriesDataMock.find((user) => user.id === user_id);
  }

  const handleSubmit = (
    values: IGeneralInformationEntry | IAssignmentFormEntry[]
  ) => {
    const editKey: keyof typeof editUserTabsConfig = Object.keys(
      editUserTabsConfig
    ).find((key) => {
      const tabConfig =
        editUserTabsConfig[key as keyof typeof editUserTabsConfig];
      return tabConfig.id === selectedTab;
    }) as keyof typeof editUserTabsConfig;

    if (editKey) {
      setEditData((prevEditData) => ({
        ...prevEditData,
        [editKey]: { entries: values },
      }));
    }

    setCurrentFormHasChanges(false);
  };

  const handleTabChange = (tabId: string) => {
    setControlModal(
      currentFormHasChanges ? { show: true, continueTab: tabId } : controlModal
    );
    setSelectedTab(currentFormHasChanges ? selectedTab : tabId);
  };

  const handleCloseModal = () => {
    setControlModal((prevControlModal) => ({
      ...prevControlModal,
      show: false,
    }));
  };

  const handleDataChange = (hasChanges: boolean) => {
    setCurrentFormHasChanges(hasChanges);
  };

  const handleContinueTab = () => {
    setCurrentFormHasChanges(false);
    setSelectedTab(controlModal.continueTab);
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
      handleContinueTab={handleContinueTab}
    />
  );
}

export { EditUser };
