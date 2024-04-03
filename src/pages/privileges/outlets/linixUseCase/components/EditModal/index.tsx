import { useState } from "react";
import { useParams } from "react-router-dom";

import { editUserTabsConfig } from "@pages/privileges/outlets/users/edit-user/config/editUserTabs.config";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { linixUseCases } from "@mocks/privileges/linixUseCases/LinixUseCases.mock";
import { DocumentsServiceMock } from "@mocks/privileges/documents/DocumentsServiceMock.mock";
import { webOptionsMock } from "@mocks/privileges/web/webOptionsMock.mock";
import { clientServerMock } from "@mocks/privileges/client-server/client-serverServiceMock.mock";

import { EditUserUI } from "./interface";
import { UseCase } from "../../types";

export interface IGeneralInformation {
  generalInformation: { entries: UseCase | undefined };
}
function EditCaseLinix() {
  const { user_id } = useParams<{ user_id: string }>();

  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });
  const message: IUsersMessage = {
    visible: false,
  };

  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const [editData, setEditData] = useState<{
    [key: string]: { [key: string]: unknown };
  }>({
    generalInformation: { entries: getUserInformation() },
  });

  const downloadableDocuments = DocumentsServiceMock.map((linixUseCase) => ({
    id: linixUseCase.CODIGO.toString(),
    value: linixUseCase.NOMBRE,
    isActive: linixUseCase.asignado === "Y" ? true : false,
  }));

  const webReports = webOptionsMock.map((linixUseCase) => ({
    id: linixUseCase.K_opcion,
    value: linixUseCase.Nombre_opcion,
    isActive: linixUseCase.asignado === "Y" ? true : false,
  }));

  const webOptions = webOptionsMock.map((linixUseCase) => ({
    id: linixUseCase.K_opcion,
    value: linixUseCase.Nombre_opcion,
    isActive: linixUseCase.asignado === "Y" ? true : false,
  }));

  const clientServerReports = clientServerMock.map((linixUseCase) => ({
    id: linixUseCase.CODIGO_OPCION,
    value: linixUseCase.DESCRIPCION,
    isActive: linixUseCase.asignado === "Y" ? true : false,
  }));

  const clientServerOptions = clientServerMock.map((linixUseCase) => ({
    id: linixUseCase.CODIGO_OPCION,
    value: linixUseCase.DESCRIPCION,
    isActive: linixUseCase.asignado === "Y" ? true : false,
  }));

  function getUserInformation() {
    return linixUseCases.find((linixUseCase) => linixUseCase.id === user_id);
  }

  const handleSubmit = (values: IAssignmentFormEntry[]) => {
    const editKey = Object.entries(editUserTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

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
      message={message}
      editData={editData}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      downloadableDocuments={downloadableDocuments}
      webReports={webReports}
      webOptions={webOptions}
      clientServerOptions={clientServerOptions}
      clientServerReports={clientServerReports}
      handleContinueTab={handleContinueTab}
      csOptions={[]}
    />
  );
}

export { EditCaseLinix };
