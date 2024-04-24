import { MdPersonOutline } from "react-icons/md";
import {
  Stack,
  Tabs,
  useMediaQueries,
  inube,
  Breadcrumbs,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";
import { PageTitle } from "@components/PageTitle";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

import { SubjectCard } from "@src/components/cards/SubjectCard";

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

import { editItemData } from "@mocks/utils/dataMock.service";
import { ClientServerButtonSelection } from "../components/ClientServerButtonSelection";
import { GeneralInformationForm } from "../components/GeneralInformationForm";

interface IControlModal {
  show: boolean;
  continueTab: string;
}
interface EditUserUIProps {
  selectedTab: string;
  formData: IFormAddLinixUseCase;
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
    editData,
    id,
    handleTabChange,
    handleSubmit,
    controlModal,
    handleCloseModal,
    handleDataChange,
    handleContinueTab,
    formData,
    csOptions,
    webOptions,
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

  return (
    <StyledContainer smallScreen={smallScreen}>
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
                title="Informacion del usuario"
                icon={<MdPersonOutline size={24} />}
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
              initialValues={currentInformation as IGeneralInformation}
              csOptions={csOptions}
              webOptions={webOptions}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
              editItemData={editItemData}
              id={id}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.clientServerButton.id && (
            <ClientServerButtonSelection
              initialValues={formData.clientServerButton.values}
              handleSubmit={handleSubmit as () => void}
              withSubmitButtons
              onHasChanges={handleDataChange}
              csSelected={formData.generalInformation.values.k_Opcion}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.downloadableDocuments.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.downloadableDocuments.values}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab === editLinixUseCaseTabsConfig.webReports.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webReports.values}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab === editLinixUseCaseTabsConfig.webOptions.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.webOptions.values}
              handleSubmit={handleSubmit}
            />
          )}
          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerReports.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerReports.values}
              handleSubmit={handleSubmit}
            />
          )}

          {selectedTab ===
            editLinixUseCaseTabsConfig.clientServerOptions.id && (
            <InitializerForm
              withSubmitButtons
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.clientServerReports.values}
              handleSubmit={handleSubmit}
            />
          )}
        </Stack>
      </Stack>

      {controlModal.show && continueModal(handleCloseModal, handleContinueTab)}
    </StyledContainer>
  );
}

export { EditUserUI };
