import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { Button } from "@inubekit/button";
import { useMediaQueries } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Tabs } from "@inubekit/tabs";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { PageTitle } from "@components/PageTitle";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { SubjectCard } from "@components/cards/SubjectCard";
import { Option } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { updateItemData } from "@mocks/utils/dataMock.service";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { StyledContainer } from "./styles";
import { editLinixUseCaseTabsConfig } from "./config/editUseCaseTabs.config";
import {
  editLinixUseCaseConfig,
  editLinixUseCaseSubjectCardLabels,
} from "./config/editLinuxUseCase.config";
import {
  IFormAddLinixUseCase,
  IHandleChangeFormData,
} from "../adding-linix-use-case/types";
import { ClientServerButtonSelection } from "../components/ClientServerButtonSelection";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { StyledContainerLoading } from "../../users/invite/styles";

import { UseCase } from "../types";
import { InitializerForm } from "../components/InitializerForm";

interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  selectedTab: string;
  handleReset: () => void;
  selectLinixUseCase: Option[];
  linixUseCasesEdit: UseCase;
  formData: IFormAddLinixUseCase;
  loading: boolean;
  id: string;
  handleTabChange: (tabId: string) => void;
  controlModal: IControlModal;
  handleCloseModal: () => void;
  message: IMessageState;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  onCloseSectionMessage: () => void;
  webOptions: Record<string, unknown>[];
  csOptions: Record<string, unknown>[];
  setCsOptionsChange: (csOptionsChange: IAssignmentFormEntry[]) => void;
  csOptionsChange: IAssignmentFormEntry[];
  filterNForma: string;
  csOptionsButtons: Record<string, unknown>[];
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  onSubmit: () => void;
  userCardData: { username: string; code: string | undefined };
  currentFormHasChanges: boolean;
}

function EditUserUI(props: EditUserUIProps) {
  const [key, setKey] = useState(0);
  const {
    selectedTab,
    handleReset,
    onCloseSectionMessage,
    selectLinixUseCase,
    userCardData,
    currentFormHasChanges,
    id,
    message,
    filterNForma,
    loading,
    handleTabChange,
    handleDataChange,
    formData,
    csOptions,
    webOptions,
    setCsOptionsChange,
    csOptionsChange,
    handleUpdateFormData,
    onSubmit,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const forceReRender = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return loading ? (
    <StyledContainerLoading>
      <LoadingApp />
    </StyledContainerLoading>
  ) : (
    <StyledContainer $smallScreen={smallScreen} key={key}>
      <Stack gap={"48px"} direction="column">
        <Stack gap={"16px"} direction="column">
          <Breadcrumbs crumbs={editLinixUseCaseConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={"32px"}
          >
            <PageTitle
              title="Editar un caso de uso"
              navigatePage="/privileges/linixUseCase"
              description="describir la nueva informacion de caso de uso"
            />

            {userCardData && (
              <SubjectCard
                subjectData={userCardData}
                title="Informacion del caso de uso"
                icon={<TfiMenuAlt size={24} />}
                labels={editLinixUseCaseSubjectCardLabels}
              />
            )}
          </Stack>
        </Stack>
        <Stack gap={"32px"} direction="column">
          <Tabs
            tabs={Object.values(editLinixUseCaseTabsConfig)}
            selectedTab={selectedTab}
            scroll={typeTabs ? true : false}
            onChange={handleTabChange}
          />
          {selectedTab === editLinixUseCaseTabsConfig.generalInformation.id && (
            <GeneralInformationForm
              initialValues={formData.generalInformation.values}
              csOptions={csOptions}
              webOptions={webOptions}
              handleSubmit={handleUpdateFormData}
              onHasChanges={handleDataChange}
              updateItemData={updateItemData}
              id={id}
              selectLinixUseCase={selectLinixUseCase}
              editform={false}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.clientServerButton.id && (
            <ClientServerButtonSelection
              onHasChanges={handleDataChange}
              initialValues={formData.clientServerButton.values}
              handleSubmit={handleUpdateFormData}
              id={filterNForma as string}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.downloadableDocuments.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.downloadableDocuments?.values}
              handleSubmit={handleUpdateFormData}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.webReports.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webReports.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}

          {selectedTab === editLinixUseCaseTabsConfig.webOptions.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webOptions.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerReports.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerReports.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}

          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerOptions.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerOptions.values}
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
