import { TfiMenuAlt } from "react-icons/tfi";
import {
  Stack,
  Tabs,
  useMediaQueries,
  inube,
  Breadcrumbs,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";

import { PageTitle } from "@components/PageTitle";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
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
  IGeneralInformation,
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
  selectLinixUseCase: Option[];
  linixUseCasesEdit: UseCase;
  formData: IFormAddLinixUseCase;
  loading: boolean;
  id: string;
  handleTabChange: (tabId: string) => void;
  editData: { [key: string]: { [key: string]: unknown } };
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  controlModal: IControlModal;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  webOptions: Record<string, unknown>[];
  csOptions: Record<string, unknown>[];
  setCsOptionsChange: (csOptionsChange: IAssignmentFormEntry[]) => void;
  csOptionsChange: IAssignmentFormEntry[];
  handleSubmitAssignmentForm: (csOptionsChange: IAssignmentFormEntry[]) => void;
  //EditOptionsData: Record<string, unknown>[];
}

function continueModal(
  handleCloseModal: () => void,
  handleContinueTab: () => void
) {
  return (
    <DecisionModal
      loading={false}
      closeModal={handleCloseModal}
      handleClick={handleContinueTab}
      title="Continuar sin guardar"
      description="¿Seguro que desea salir? cualquier cambio no guardado se perderá"
      actionText="Continuar"
      appearance="error"
    />
  );
}

function EditUserUI(props: EditUserUIProps) {
  const {
    selectedTab,
    selectLinixUseCase,
    editData,
    id,
    loading,
    handleTabChange,
    handleSubmit,
    controlModal,
    linixUseCasesEdit,
    handleCloseModal,
    handleDataChange,
    handleContinueTab,
    formData,
    csOptions,
    webOptions,
    setCsOptionsChange,
    csOptionsChange,
    handleSubmitAssignmentForm,
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
              initialValues={linixUseCasesEdit as IGeneralInformation}
              csOptions={csOptions}
              webOptions={webOptions}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
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
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.downloadableDocuments.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.downloadableDocuments.values}
              handleSubmit={handleSubmit}
              id={id}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.webReports.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webReports.values}
              handleSubmit={() => {
                handleSubmitAssignmentForm(csOptionsChange);
              }}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
              id={id}
              nameOption="webReports"
              formData={linixUseCasesEdit}
            />
          )}

          {selectedTab === editLinixUseCaseTabsConfig.webOptions.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webOptions.values}
              handleSubmit={() => {
                handleSubmitAssignmentForm(csOptionsChange);
              }}
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
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerReports.values}
              handleSubmit={() => {
                handleSubmitAssignmentForm(csOptionsChange);
              }}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
              id={id}
              nameOption="clientServerReports"
              formData={linixUseCasesEdit}
            />
          )}

          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerOptions.id && (
            <>
              <InitializerForm
                withSubmitButtons
                onHasChanges={handleDataChange}
                dataOptionsForms={formData.clientServerOptions.values}
                handleSubmit={() => {
                  handleSubmitAssignmentForm(csOptionsChange);
                }}
                changeData={csOptionsChange}
                setChangedData={setCsOptionsChange}
                id={id}
                nameOption={"clientServerOptions"}
                formData={linixUseCasesEdit}
              />
            </>
          )}
        </Stack>
      </Stack>

      {controlModal.show && continueModal(handleCloseModal, handleContinueTab)}
    </StyledContainer>
  );
}

export { EditUserUI };
