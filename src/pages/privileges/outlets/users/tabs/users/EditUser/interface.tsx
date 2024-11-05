import { MdPersonOutline } from "react-icons/md";
import { useState } from "react";
import { Button } from "@inubekit/button";
import { Stack, useMediaQueries, inube } from "@inube/design-system";
import { PageTitle } from "@components/PageTitle";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { SubjectCard } from "@components/cards/SubjectCard";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { Tabs } from "@inubekit/tabs";
import {
  IFormAddUsers,
  IGeneralInformationUsersForm,
  IHandleChangeFormData,
} from "@services/users/users.types";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { StyledContainer } from "./styles";
import { GeneralInformationForm } from "../GeneralInfoForm";
import { editLinixUserTabsConfig } from "./config/editUsersTabs.config";
import {
  editLinixUserSubjectCardLabels,
  editLinixUsersConfig,
} from "./config/editLinuxUsers.config";

import { InitializerForm } from "../InitializerForm";

interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  positions: Record<string, unknown>[];
  selectedTab: string;
  loading: boolean;
  formData: IFormAddUsers;
  onSubmit: () => void;
  id: string;
  handleTabChange: (tabId: string) => void;
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  controlModal: IControlModal;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  currentFormHasChanges: boolean;
  handleReset: () => void;
  usersEdit: IGeneralInformationUsersForm;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  csOptionsChange: IAssignmentFormEntry[];
  setCsOptionsChange: (csOptionsChange: IAssignmentFormEntry[]) => void;
}

function EditUserUI(props: EditUserUIProps) {
  const [key, setKey] = useState(0);
  const {
    message,
    handleUpdateFormData,
    positions,
    onCloseSectionMessage,
    selectedTab,
    onSubmit,
    loading,
    currentFormHasChanges,
    id,
    handleReset,
    handleTabChange,
    csOptionsChange,
    setCsOptionsChange,
    handleDataChange,

    formData,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const {
    generalInformation: { values: currentInformation },
  } = formData;

  const userCardData = currentInformation && {
    username: (currentInformation as { n_Usuari: string }).n_Usuari,
  };
  const forceReRender = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return loading ? (
    <LoadingApp />
  ) : (
    <StyledContainer smallScreen={smallScreen} key={key}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s200} direction="column">
          <Breadcrumbs crumbs={editLinixUsersConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s400}
          >
            <PageTitle
              title="Edicion de usuario"
              navigatePage="/privileges/users"
              description="describir la nueva informacion de caso de uso"
            />

            {currentInformation && userCardData && (
              <SubjectCard
                subjectData={userCardData}
                title="Informacion del Usuario"
                icon={<MdPersonOutline size={24} />}
                labels={editLinixUserSubjectCardLabels}
              />
            )}
          </Stack>
        </Stack>
        <Stack gap={inube.spacing.s400} direction="column">
          <Tabs
            tabs={Object.values(editLinixUserTabsConfig)}
            selectedTab={selectedTab}
            scroll={typeTabs ? true : false}
            onChange={handleTabChange}
          />
          {selectedTab === editLinixUserTabsConfig.generalInformation.id && (
            <GeneralInformationForm
              initialValues={formData.generalInformation.values}
              handleSubmit={handleUpdateFormData}
              positions={positions}
              onHasChanges={handleDataChange}
              id={id}
            />
          )}
          {selectedTab === editLinixUserTabsConfig.branches.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.branches.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab === editLinixUserTabsConfig.projectsOrEvents.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.projectsOrEvents.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab === editLinixUserTabsConfig.aidBudgetUnits.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.aidBudgetUnits.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab === editLinixUserTabsConfig.payrolls.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.payrolls.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}

          <Stack gap={"16px"} justifyContent="flex-end">
            <Button
              appearance="gray"
              disabled={!currentFormHasChanges}
              onClick={() => {
                handleReset();
                forceReRender();
              }}
              type="reset"
            >
              Cancelar
            </Button>
            <Button
              appearance="primary"
              disabled={!currentFormHasChanges}
              onClick={onSubmit}
              loading={loading}
              type="button"
            >
              Guardar
            </Button>
          </Stack>
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={onCloseSectionMessage}
            />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
