import { TfiMenuAlt } from "react-icons/tfi";
import {
  Stack,
  Tabs,
  useMediaQueries,
  inube,
  Breadcrumbs,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { SubjectCard } from "@components/cards/SubjectCard";
import { Option } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { updateItemData } from "@mocks/utils/dataMock.service";
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
import { RenderMessage } from "@src/components/feedback/RenderMessage";
import { Button } from "@inubekit/button";

interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  selectedTab: string;
  selectLinixUseCase: Option[];
  linixUseCasesEdit: UseCase;
  formData: IFormAddLinixUseCase;
  loading: boolean;
  id: string;
  handleTabChange: (tabId: string) => void;
  editData: { [key: string]: { [key: string]: unknown } };
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
  handleSubmitAssignmentForm: (values: IAssignmentFormEntry[]) => void;
  currentFormHasChanges: boolean;
}

function EditUserUI(props: EditUserUIProps) {
  const {
    selectedTab,
    onCloseSectionMessage,
    selectLinixUseCase,
    editData,
    id,
    message,
    filterNForma,
    loading,
    handleTabChange,
    linixUseCasesEdit,
    handleDataChange,
    formData,
    csOptions,
    webOptions,
    setCsOptionsChange,
    csOptionsChange,
    handleUpdateFormData,
    onSubmit,
    // handleSubmitAssignmentForm,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);
  const {
    generalInformation: { entries: currentInformation },
  } = editData;

  const userCardData = currentInformation && {
    username: (currentInformation as { n_Usecase: string }).n_Usecase,
    code: (currentInformation as { k_Usecase: string }).k_Usecase,
    type: (currentInformation as { i_Tipusec: string }).i_Tipusec,
    description: (currentInformation as { n_Descrip: string }).n_Descrip,
  };

  return loading ? (
    <StyledContainerLoading>
      <LoadingApp />
    </StyledContainerLoading>
  ) : (
    <StyledContainer $smallScreen={smallScreen}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s200} direction="column">
          <Breadcrumbs crumbs={editLinixUseCaseConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s400}
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
        <Stack gap={inube.spacing.s400} direction="column">
          <Tabs
            tabs={Object.values(editLinixUseCaseTabsConfig)}
            selectedTab={selectedTab}
            type={typeTabs ? "select" : "tabs"}
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
              initialValues={formData.clientServerButton.values}
              handleSubmit={handleUpdateFormData}
              id={filterNForma as string}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.downloadableDocuments.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.downloadableDocuments.values}
              handleSubmit={handleUpdateFormData}
              id={id}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.webReports.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webReports.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
              id={id}
              nameOption="webReports"
              formData={linixUseCasesEdit}
            />
          )}

          {selectedTab === editLinixUseCaseTabsConfig.webOptions.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webOptions.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
              id={id}
              nameOption="webOptions"
              formData={linixUseCasesEdit}
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
              id={id}
              nameOption="clientServerReports"
              formData={linixUseCasesEdit}
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
              id={id}
              nameOption={"clientServerOptions"}
              formData={linixUseCasesEdit}
            />
          )}

          <Button appearance="gray" onClick={() => {}} type="reset">
            cancelado
          </Button>
          <Button
            appearance="primary"
            onClick={onSubmit}
            loading={loading}
            type="button"
          >
            Guardar
          </Button>

          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={() => {}}
            />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
